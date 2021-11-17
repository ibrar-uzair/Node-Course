
const express =require('express')
const path=require('path');



const router = express.Router()

router.get("/",(req,res,next)=>{
    console.log("Hello from admin routes");

})

module.exports=router