const db = require('../utils/database');

const Product=require('../models/product')


exports.AddProduct=(req,res,next)=>{
    // res.sendFile(path.join(dirRoot,'views','add-product.html'))
    res.render('add-product', {layout: false})
}

exports.AddProductInArray=(req,res,next)=>{
    console.log(req.body.name);
    console.log(req.body.category);
    console.log(req.body.price);
    console.log(req.body.description);
    
    Product.create({
        name:req.body.name,
        category:req.body.category,
        price:req.body.price,
        description:req.body.description
    })
    .then(result=>{
        console.log(result);
    })
    .then(err =>{
        console.log(err);
    });
    // res.sendFile(path.join(dirRoot,'views','show.html')) 
    res.redirect("/");
}

