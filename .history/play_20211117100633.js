
const path=require('path');

const http=require('http');
const { parse } = require('path/posix');

const express=require('express');
const bodyParser = require('body-parser');

const app=express();

app.use(bodyParser.urlencoded({extended:false}))

const adminRoutes=require('./routes/admin')
const shopRoutes=require('./routes/shop')

app.use(shopRoutes);
app.use(adminRoutes.router);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','pagenotfound.html'))
})



app.use(express.static(path.join(__dirname, 'public')));


console.log("Server is listening on port 3000");
app.listen(3000);
