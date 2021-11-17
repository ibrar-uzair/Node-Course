
const express =require('express')

const router = express.router

router.use("/",(req,res,next)=>{
    console.log("Hello from admin routes");
})

module.exports=router