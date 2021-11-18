const Product=require('../models/product')


exports.AddProduct=(req,res,next)=>{
    // res.sendFile(path.join(dirRoot,'views','add-product.html'))
    res.render('add-product', {layout: false})
}

exports.AddProductInArray=(req,res,next)=>{
    const prod =new Product(req.body.title) 
    prod.save();
    // res.sendFile(path.join(dirRoot,'views','show.html'))
    res.redirect("/");
}

exports.products=products