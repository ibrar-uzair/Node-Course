
const express =require('express')
const path=require('path');

const dirRoot=require('../utils/paths')

const router = express.Router()

const products=["Shirt","Jacket"]

router.get("/",(req,res,next)=>{
    res.sendFile(path.join(dirRoot,'views','add-product.html'))
})

router.post("/add-product",(req,res,next)=>{
    console.log(req.body.name);
    products.push()
    res.sendFile(path.join(dirRoot,'views','show.html'))
})

module.exports.router=router
module.exports.users=products