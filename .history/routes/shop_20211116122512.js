
const express =require('express')

const router = express.Router()

router.get("/show-all",(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','show-all.html'))

})

module.exports=router