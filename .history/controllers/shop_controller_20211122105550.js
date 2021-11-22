
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
    const prodId=req.body.prodId
    const name=req.body.name;
    const category=req.body.category;
    const price=req.body.price;
    const description=req.body.description;
    Product.update(
    {   prodName: name,
        prodCategory: category,
        prodPrice: price,
        prodDescription:description
    },
    { where: { prodId: prodId }}     
    ).then(result=> { 
        console.log("Project updated successfully!");
    });

    res.redirect("/show-all");
}

exports.deleteProduct=(req,res,next)=>{
    const prodId = req.body.prodId;
    Product.findByPk(prodId)
        .then(product => {
        return product.destroy();
        })
        .then(result => {
        console.log('DESTROYED PRODUCT');
        res.redirect("/show-all");
        })
        .catch(err => console.log(err));
}