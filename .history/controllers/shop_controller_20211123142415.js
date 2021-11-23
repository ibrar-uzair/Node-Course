const Product = require("../models/product");
const Cart = require("../models/cart");

exports.showAllProducts = (req, res, next) => {
  Product.findAll()
    .then((rows) => {
      res.render("show", { prods: rows, layout: false });
    })
    .catch((err) => console.log(err));
};

exports.showCart = (req, res, next) => {
  res.render("cart");
};

exports.showOrder = (req, res, next) => {
  res.render("order");
};

exports.showShop = (req, res, next) => {
  res.render("shop");
};
