
const Product=require('../models/product')
const Cart=require('../models/cart')


exports.showAllProducts=(req,res,next)=>{
    Product.findAll()
    .then(rows=>{
        res.render('show',{prods:rows, layout: false});
    })
    .catch(err=>console.log(err));
    
}

exports.showCart=(req,res,next)=>{
    res.render('cart');
    // Cart.findAll()
    // .then(rows=>{
    //     res.render('cart',{prods:rows, layout: false});
    // })
    // .catch(err=>console.log(err));   
}