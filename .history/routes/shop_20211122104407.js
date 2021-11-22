const path=require('path');
const adminRoutes=require('./admin')


const express =require('express')

const dirRoot=require('../utils/paths')

const shopController=require('../controllers/shop_controller')

const router = express.Router()

router.get("/show-all",shopController.showAllProducts)

router.get("/product-details/:prodId",shopController.getProduct)

router.get("/update-product/:prodId",shopController.updateProduct)

router.post("/update-product",shopController.saveUpdatedProduct)

router.post('/delete-product', shopController.deleteProduct);


module.exports=router