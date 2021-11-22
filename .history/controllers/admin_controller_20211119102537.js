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
    console.log(name);
    console.log(category);
    console.log(price);
    console.log(description);


    Product.create({
    
        name:name,
        category:category,
        price:price,
        description:description
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

