
const Product=require('../models/product')

exports.showAllProducts=(req,res,next)=>{
    const products=Product.getAllProducts();
    console.log(products)
    // console.log("Showing All Products");
    res.render('show',{prods:products, layout: false});
    // res.sendFile(path.join(__dirname,'../','views','show.html'))
}

