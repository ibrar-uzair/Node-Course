const products=[]


exports.AddProduct=(req,res,next)=>{
    // res.sendFile(path.join(dirRoot,'views','add-product.html'))
    res.render('add-product', {layout: false})
}

exports.AddProductInArray=(req,res,next)=>{
    products.push({title:req.body.name});
    // res.sendFile(path.join(dirRoot,'views','show.html'))
    res.redirect("/");
}

