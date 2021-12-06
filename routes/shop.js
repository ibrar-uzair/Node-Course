const path = require("path");
const adminRoutes = require("./admin");
const isAuth = require("../middleware/is-auth");

const express = require("express");

const dirRoot = require("../utils/paths");

const shopController = require("../controllers/shop_controller");

const router = express.Router();

router.get("/show-all", isAuth, shopController.showAllProducts);

router.get("/show-cart", isAuth, shopController.getCart);

router.get("/show-order", isAuth, shopController.showOrder);

router.get("/show-shop", isAuth, shopController.showShop);

router.get("/post-cart/:_id", isAuth, shopController.postCart);

module.exports = router;
