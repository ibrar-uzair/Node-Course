// const db = require("../utils/database");

const Product = require("../models/product");

exports.AddProduct = (req, res, next) => {
  // res.sendFile(path.join(dirRoot,'views','add-product.html'))
  res.render("add-product", {
    layout: false,
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.AddProductInArray = (req, res, next) => {
  const name = req.body.name;
  const category = req.body.category;
  const price = req.body.price;
  const description = req.body.description;
  const imageUrl = req.file;
  console.log(imageUrl);
  const product = new Product({
    prodName: name,
    prodCategory: category,
    prodPrice: price,
    prodDescription: description,
    imageUrl: imageUrl,
    userId: req.user._id,
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
      res.render("product-details", {
        prods: product,
        layout: false,
        isAuthenticated: req.session.isLoggedIn,
      });
    })
    .catch((err) => console.log(err));
};

exports.updateProduct = (req, res, next) => {
  const prodId = req.params.prodId;
  Product.findById(prodId)
    .then((product) => {
      console.log(product);
      res.render("update-product", {
        prods: product,
        layout: false,
        isAuthenticated: req.session.isLoggedIn,
      });
    })
    .catch((err) => console.log(err));
};

exports.saveUpdatedProduct = (req, res, next) => {
  console.log("Came here");
  const prodId = req.body.prodId;
  const name = req.body.name;
  const category = req.body.category;
  const price = req.body.price;
  const description = req.body.description;
  const imageUrl = req.file;
  console.log(imageUrl);

  Product.findById(prodId)
    .then((product) => {
      product.prodName = name;
      product.prodPrice = price;
      product.prodCategory = category;
      product.prodDescription = description;
      product.save();
    })
    .then((result) => {
      console.log("Product Updated");
      res.redirect("/show-all");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteProduct = (req, res, next) => {
  const prodId = req.params.deleteProd;
  Product.findByIdAndRemove(prodId)
    .then((result) => {
      console.log("Product Deleted");
      res.status(200).json({ message: "Success!" });
    })
    .catch((err) => {
      res.status(500).json({ message: "Deleting product failed." });
    });
};
