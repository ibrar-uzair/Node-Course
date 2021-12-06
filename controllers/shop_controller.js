const Product = require("../models/product");
const Cart = require("../models/cart");
const ITEMS_PER_PAGE = 1;

exports.showAllProducts = (req, res, next) => {
  Product.find()
    .then((products) => {
      console.log(products);
      res.render("show", {
        prods: products,
        layout: false,
        isAuthenticated: req.session.isLoggedIn,
      });
    })
    .catch((err) => console.log(err));
};

exports.showCart = (req, res, next) => {
  req.user.getCart().then((cart) => {
    return cart.getProducts().then((Products) => {
      res.render("cart", {
        prods: Products,
        layout: false,
        isAuthenticated: req.session.isLoggedIn,
      });
    });
  });
};

exports.showOrder = (req, res, next) => {
  res.render("order");
};

exports.showShop = (req, res, next) => {
  const page = +req.query.page || 1; // + is used to convert it to string and || is used to tell if not available then keep page as 1
  let totalItems;

  Product.find()
    .countDocuments()
    .then((numProducts) => {
      totalItems = numProducts;
      return Product.find()
        .skip((page - 1) * ITEMS_PER_PAGE)
        .limit(ITEMS_PER_PAGE);
    })
    .then((products) => {
      res.render("shop", {
        prods: products,
        isAuthenticated: req.session.isLoggedIn,
        currentPage: page,
        hasNextPage: ITEMS_PER_PAGE * page < totalItems,
        hasPreviousPage: page > 1,
        nextPage: page + 1,
        previousPage: page - 1,
        lastPage: Math.ceil(totalItems / ITEMS_PER_PAGE),
      });
    })
    .catch((err) => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.postCart = (req, res, next) => {
  console.log("Came in post cart");
  const prodId = req.params._id;
  Product.findById(prodId)
    .then((product) => {
      return req.user.addToCart(product);
    })
    .then((result) => {
      console.log(result);
      res.redirect("/show-shop");
    });
};

exports.getCart = (req, res, next) => {
  req.user
    .populate("cart.items.productId")
    .then((user) => {
      const products = user.cart.items;
      console.log(user.cart.items);
      res.render("cart", {
        prods: products,
        layout: false,
        isAuthenticated: req.session.isLoggedIn,
      });
    })
    .catch((err) => console.log(err));
};
