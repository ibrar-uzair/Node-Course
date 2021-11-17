

const http=require('http');
const { parse } = require('path/posix');

const express=require('express');


const app=express();

app.use('/',(req,res,next)=>{
    console.log("In the middleware")
    res.send('<h1>Hello from the middleware</h1>')
})

const server =http.createServer(app);

console.log("Server is listening on port 3000");
server.listen(3000)
