
const express =require('express')
const path=require('path');

const dirRoot=require('../utils/paths')

const router = express.Router()

const users=["Ahmed","Ali"]

router.get("/",(req,res,next)=>{
    res.sendFile(path.join(dirRoot,'views','add-product.html'))
})

router.get("/add-user",(req,res,next)=>{
    console.log("Came")
    res.sendFile(path.join(dirRoot,'views','show.html'))
})

module.exports.router=router
module.exports.users=users