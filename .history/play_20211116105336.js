

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

app.use('/dsc',(req,res,next)=>{
    res.send('<h1>Hello from first response</h1>')
    next();
})
app.use('/users',(req,res,next)=>{
    res.send('<h1>Hello Users</h1>');
    res.send('<form action="/add-user" method="POST"><input type="text" name="name">Enter the name of the user</input><button>Send</button></form>');
})

app.use('/add-user',(req,res,next)=>{
    res.send(req.body);
})


const server =http.createServer(app);

console.log("Server is listening on port 3000");
server.listen(3000)