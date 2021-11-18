
const express =require('express')
const path=require('path');

const adminController=require('../controllers/admin_controller')

const dirRoot=require('../utils/paths')

const router = express.Router()


router.get("/",adminController.AddProduct)

router.post("/add-product",adminController.AddProductInArray)

module.exports=router
// module.exports.products=products