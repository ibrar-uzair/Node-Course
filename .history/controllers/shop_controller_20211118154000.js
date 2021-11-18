
const Product=require('../models/product')

exports.showAllProducts=(req,res,next)=>{
    Product.getAllProducts()
    .then(([rows,fieldData])=>{
        res.render('show',{prods:rows, layout: false});
    })
    .catch(err=>console.log(err));
    
    // res.sendFile(path.join(__dirname,'../','views','show.html'))
}

