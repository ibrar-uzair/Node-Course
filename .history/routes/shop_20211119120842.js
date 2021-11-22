const path=require('path');
const adminRoutes=require('./admin')


const express =require('express')

const dirRoot=require('../utils/paths')

const shopController=require('../controllers/shop_controller')

const router = express.Router()

router.get("/show-all",shopController.showAllProducts)

router.get("/product-details",shopController.getProduct)

module.exports=router