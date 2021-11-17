

const http=require('http');
const { parse } = require('path/posix');

const express=require('express');


const app=express();

app.use('/',(req,res,next)=>{
    console.log("I'll always run")
    next();
})

app.use('/',(req,res,next)=>{
    console.log("I'll always run")
    next();
})

app.use('/',(req,res,next)=>{
    res.send('<h1>Hello from first response</h1>')
    next();
})
app.use('/users',(req,res,next)=>{
    res.send('<h1>Hello from user response</h1>')
})

app.use('/users',(req,res,next)=>{
    console.log("I'll always run")
    next();
})


const server =http.createServer(app);

console.log("Server is listening on port 3000");
server.listen(3000)
