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
  const product = new Product(name, category, price, description);
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
  console.log(prodId);
  req.user
    .getProducts({ where: { prodId: prodId } })
    .then((products) => {
      const product = products[0];
      res.render("product-details", { prods: product, layout: false });
    })
    .catch((err) => console.log(err));
};

exports.updateProduct = (req, res, next) => {
  const prodId = req.params.prodId;
  // console.log(prodId);
  Product.findById(prodId)
    .then((product) => {
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
  Product.update(
    {
      prodName: name,
      prodCategory: category,
      prodPrice: price,
      prodDescription: description,
    },
    { where: { prodId: prodId } }
  ).then((result) => {
    console.log("Project updated successfully!");
  });

  res.redirect("/show-all");
};

exports.deleteProduct = (req, res, next) => {
  const prodId = req.body.prodId;
  Product.findByPk(prodId)
    .then((product) => {
      return product.destroy();
    })
    .then((result) => {
      console.log("DESTROYED PRODUCT");
      res.redirect("/show-all");
    })
    .catch((err) => console.log(err));
};
