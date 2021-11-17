
const express =require('express')

const router = express.Router()

router.get("/admin",(req,res,next)=>{
    console.log("Hello from admin routes");
})

module.exports=router