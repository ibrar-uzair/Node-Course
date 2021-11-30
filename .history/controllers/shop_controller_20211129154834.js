const Product = require("../models/product");
const Cart = require("../models/cart");

exports.showAllProducts = (req, res, next) => {
  Product.find()
    .then((products) => {
      console.log(products);
      res.render("show", { prods: products, layout: false });
    })
    .catch((err) => console.log(err));
};

exports.showCart = (req, res, next) => {
  req.user.getCart().then((cart) => {
    return cart.getProducts().then((Products) => {
      res.render("cart", { prods: Products, layout: false });
    });
  });
};

exports.showOrder = (req, res, next) => {
  res.render("order");
};

exports.showShop = (req, res, next) => {
  Product.find()
    .then((products) => {
      console.log(products);
      res.render("shop", { prods: products, layout: false });
    })
    .catch((err) => console.log(err));
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId)
    .then((product) => {
      return req.user.addToCart(product);
    })
    .then((result) => {
      console.log(result);
      res.redirect("/shop");
    });
};
