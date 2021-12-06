const express = require("express");
const path = require("path");
const isAuth = require("../middleware/is-auth");

const adminController = require("../controllers/admin_controller");

const dirRoot = require("../utils/paths");

const router = express.Router();

router.get("/", isAuth, adminController.AddProduct);

router.post("/add-product", isAuth, adminController.AddProductInArray);

router.get("/product-details/:prodId", isAuth, adminController.getProduct);

router.get("/update-product/:prodId", isAuth, adminController.updateProduct);

router.post("/update-product", isAuth, adminController.saveUpdatedProduct);

router.delete("/product/:productId", isAuth, adminController.deleteProduct);

module.exports = router;
