exports.showAllProducts=(req,res,next)=>{
    console.log(adminRoutes.products);
    const products=adminRoutes.products;
    res.render('show',{prods:products, layout: false});
    // res.sendFile(path.join(__dirname,'../','views','show.html'))
}