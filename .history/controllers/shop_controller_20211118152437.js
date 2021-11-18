
const Product=require('../models/product')

exports.showAllProducts=(req,res,next)=>{
    Product.getAllProducts()
    .then(result=>{
        console.log(result);
    })
    .catch(err=>{
        console.log(err);
    })
    console.log(products);
    res.render('show',{prods:products, layout: false});
    // res.sendFile(path.join(__dirname,'../','views','show.html'))
}

