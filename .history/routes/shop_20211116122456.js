
const express =require('express')

const router = express.Router()

router.get("/show-all",(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','add-product.html'))

})

module.exports=router