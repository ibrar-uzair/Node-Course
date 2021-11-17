const path=require('path');
const adminRoutes=require('./admin')


const express =require('express')

const dirRoot=require('../utils/paths')


const router = express.Router()

router.get("/show-all",(req,res,next)=>{
    console.log("Cameeeeeeeeeee");
    console.log(adminRoutes.products);
    res.sendFile(path.join(__dirname,'../','views','show.html'))
})



module.exports=router