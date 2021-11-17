
const express =require('express')

const router = express.Router()

router.get("/show-all",(req,res,next)=>{
    console.log("Hello from shop routes");
})

module.exports=router