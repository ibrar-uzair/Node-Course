const path = require("path");
const adminRoutes = require("./admin");

const express = require("express");

const dirRoot = require("../utils/paths");

const shopController = require("../controllers/shop_controller");

const router = express.Router();

router.get("/show-all", shopController.showAllProducts);

router.get("/show-cart", shopController.showCart);

router.get("/show-order", shopController.showOrder);

router.get("/show-shop", shopController.showShop);

module.exports = router;
