exports.showAllProducts=(req,res,next)=>{
    console.log("Showing All Products");
    res.render('show');
    // res.sendFile(path.join(__dirname,'../','views','show.html'))
}