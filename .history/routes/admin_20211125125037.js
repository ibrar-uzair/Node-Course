const express = require("express");
const path = require("path");

const adminController = require("../controllers/admin_controller");

const dirRoot = require("../utils/paths");

const router = express.Router();

router.get("/", adminController.AddProduct);

router.post("/add-product", adminController.AddProductInArray);

router.get("/product-details/:prodId", adminController.getProduct);

router.get("/update-product/:prodId", adminController.updateProduct);

router.post("/update-product", adminController.saveUpdatedProduct);

router.post("/delete-product/:prodId", adminController.deleteProduct);

module.exports = router;
