const path=require('path');

const express =require('express')

const router = express.Router()

router.get("/show-all",(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','show.html'))
})

router.get("/add-user",(req,res,next)=>{
    console.log("Came")
    res.sendFile(path.join(dirRoot,'views','show.html'))
})

module.exports=router