
const Product=require('../models/product')

exports.showAllProducts=(req,res,next)=>{
    Product.findAll()
    .then(rows=>{
        res.render('show',{prods:rows, layout: false});
    })
    .catch(err=>console.log(err));
    
}

exports.getProduct=(req,res,next)=>{
    const prodId=req.params.prodId;
    console.log(prodId);
    Product.findByPk(prodId)
    .then(product =>{
        res.render('product-details',{prods:product, layout: false});
    })
    .catch(err=>console.log(err));    
}


exports.updateProduct=(req,res,next)=>{
    const prodId=req.params.prodId;
    console.log(prodId);
    Product.findByPk(prodId)
    .then(product =>{
        res.render('update-product',{prods:product, layout: false});
    })
    .catch(err=>console.log(err));    
}

exports.saveUpdatedProduct=(req,res,next)=>{

    console.log("Updating Product");

    const name=req.body.name;
    const category=req.body.category;
    const price=req.body.price;
    const description=req.body.description;

    Product.update(
    { prodName: name,
        prodCategory: category,
        prodPrice: price,
        prodDescription:description
    },
    { _id : req.body.prodId }     
    ).success(function() { 
        console.log("Project updated successfully!");
    }).error(function(err) { 
        console.log("Project update failed !");    
    });

    res.redirect("/show-all");
}
