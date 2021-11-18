exports.showAllProducts=(req,res,next)=>{
    console.log("Showing All Products");
    const product=[]
    res.render('show',{prods:products, layout: false});
    // res.sendFile(path.join(__dirname,'../','views','show.html'))
}