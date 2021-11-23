const db = require('../utils/database');

const Product=require('../models/product')


exports.AddProduct=(req,res,next)=>{
    // res.sendFile(path.join(dirRoot,'views','add-product.html'))
    res.render('add-product', {layout: false})
}

exports.AddProductInArray=(req,res,next)=>{
    console.log("=-==================================================")
    console.log(req.body);

    const name=req.body.name;
    const category=req.body.category;
    const price=req.body.price;
    const description=req.body.description;
    

    req.user
    .createProduct({
        prodName: name,
        prodCategory: category,
        prodPrice: price,
        prodDescription:description,
    })
    .then(result => {
      console.log('Created Product');
      res.redirect("/");
    })
    .catch(err => {
      console.log(err);
    });

}

