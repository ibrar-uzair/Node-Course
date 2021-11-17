

const http=require('http');
const { parse } = require('path/posix');

const express=require('express');
const bodyParser = require('body-parser');

const app=express();

app.use(bodyParser.urlencoded({extended:false}))

const adminRoutes=require('./routes/admin')
const shopRoutes=require('./routes/shop')

app.use(shopRoutes);
app.use(adminRoutes);

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found</h1>')
})

const server =http.createServer(app);

console.log("Server is listening on port 3000");
server.listen(3000)
