
const express =require('express')

const router = express.router

router.get("/admin",(req,res,next)=>{
    console.log("Hello from admin routes");
})

module.exports=router