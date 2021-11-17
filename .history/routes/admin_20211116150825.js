
const express =require('express')
const path=require('path');

const dirRoot=require('../utils/paths')

const router = express.Router()

const users=["Ahmed","Ali"]

router.get("/",(req,res,next)=>{
    res.sendFile(path.join(dirRoot,'views','add-product.html'))
})

module.exports.router=router
module.exports.users=users