const Product = require("../models/product");
const Cart = require("../models/cart");

exports.showAllProducts = (req, res, next) => {
  console, log(Product.fetchAll());
  // .then((products) => {
  //   console.log(products);
  //   res.render("show", { prods: products, layout: false });
  // })
  // .catch((err) => console.log(err));
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
  res.render("shop");
};
