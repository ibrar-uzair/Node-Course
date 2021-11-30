const db = require("../utils/database");

const Product = require("../models/product");

exports.AddProduct = (req, res, next) => {
  // res.sendFile(path.join(dirRoot,'views','add-product.html'))
  res.render("add-product", { layout: false });
};

exports.AddProductInArray = (req, res, next) => {
  const name = req.body.name;
  const category = req.body.category;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product({
    prodName: name,
    prodCategory: category,
    prodPrice: price,
    prodDescription: description,
  });
  product
    .save()
    .then((result) => {
      console.log("Product Created");
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.prodId;
  Product.findById(prodId)
    .then((product) => {
      res.render("product-details", { prods: product, layout: false });
    })
    .catch((err) => console.log(err));
};

exports.updateProduct = (req, res, next) => {
  const prodId = req.params.prodId;
  Product.findById(prodId)
    .then((product) => {
      console.log(product);
      res.render("update-product", { prods: product, layout: false });
    })
    .catch((err) => console.log(err));
};

exports.saveUpdatedProduct = (req, res, next) => {
  const prodId = req.body.prodId;
  const name = req.body.name;
  const category = req.body.category;
  const price = req.body.price;
  const description = req.body.description;

  Product.update(prodId, name, category, price, description)
    .then((result) => {
      console.log("Product Updated");
      res.redirect("/show-all");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteProduct = (req, res, next) => {
  const prodId = req.body.deleteProd;
  console.log(
    "------------------------------------------------------------------------------------"
  );
  console.log(prodId);
  Product.deleteProduct(prodId)
    .then((result) => {
      console.log("Product Deleted");
      res.redirect("/show-all");
    })
    .catch((err) => {
      console.log(err);
    });
};
