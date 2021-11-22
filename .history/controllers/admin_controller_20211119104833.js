const db = require('../utils/database');

const Product=require('../models/product')


exports.AddProduct=(req,res,next)=>{
    // res.sendFile(path.join(dirRoot,'views','add-product.html'))
    res.render('add-product', {layout: false})
}

exports.AddProductInArray=(req,res,next)=>{
    const name=req.body.name;
    const category=req.body.category;
    const price=req.body.price;
    const description=req.body.description;

    Product.create({
        prodName: name,
        prodCategory: category,
        prodPrice: price,
        prodDescription:description,
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

