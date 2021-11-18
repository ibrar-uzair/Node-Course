const Product=require('../models/product')


exports.AddProduct=(req,res,next)=>{
    // res.sendFile(path.join(dirRoot,'views','add-product.html'))
    res.render('add-product', {layout: false})
}

exports.AddProductInArray=(req,res,next)=>{
    console.log(req.body.name);
    const prod =new Product(req.body.name) 
    prod.save();
    // res.sendFile(path.join(dirRoot,'views','show.html'))
    res.redirect("/");
}

