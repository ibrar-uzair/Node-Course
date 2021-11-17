
const express =require('express')
const path=require('path');

const dirRoot=require('../utils/paths')

const router = express.Router()

const products=[]

router.get("/",(req,res,next)=>{
    res.sendFile(path.join(dirRoot,'views','add-product.html'))
})

router.post("/add-product",(req,res,next)=>{
    products.push({title:req.body,name});
    // res.sendFile(path.join(dirRoot,'views','show.html'))
    res.redirect("/");
})

module.exports.router=router
module.exports.products=products