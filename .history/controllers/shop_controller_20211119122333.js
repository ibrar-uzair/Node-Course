
const Product=require('../models/product')

exports.showAllProducts=(req,res,next)=>{
    Product.findAll()
    .then(rows=>{
        res.render('show',{prods:rows, layout: false});
    })
    .catch(err=>console.log(err));
    
}

exports.getProduct=(req,res,next)=>{
    console.log("------------------------------------------------------------");
    const prodId=req.params.prodId;
    console.log(prodId);
    Product.findByPk(prodId)
    .then(product =>{
        res.render('product-details',{prods:product, layout: false});
    })
    .catch(err=>console.log(err));    
}
