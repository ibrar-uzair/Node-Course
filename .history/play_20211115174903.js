

const http=require('http');
const { parse } = require('path/posix');

const server =http.createServer((req,res)=> {
    let url=req.url
    if(url==='/'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>Greetings</title>');
        res.write('<body><h1>Welcome!</h1></body>');
        res.write('</html>');
        res.end();
    }

    if(url==='/users'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>My first Application</title>');
        res.write('<body><ul><li>Coffee</li><li>Tea</li><li>Milk</li></ul></body>');
        res.write('</html>');
        res.end();
    }

    if(url==='/users'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>My first Application</title>');
        res.write('<body><form method="POST" action="/name" ><input type="text" name="name"> Enter your name </input><button type="submit">Submit</button></form></body>');
        res.write('</html>');
        res.end();
    }
    if(url==='/name' && req.method==="POST"){

        const body=[];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });

        req.on('end',()=>{
            const parseBody=Buffer.concat(body).toString();
            const name=parseBody.split('=')[1];
            console.log(name);
            res.setHeader('Content-Type','text/html');
            res.write('<html>');
            res.write('<head><title>My first Application</title>');
            res.write(`<body><h1> Hello ${name}</h1></body>`);
            res.write('</html>');
            res.end();
        });

        
    }

})

console.log("Server is listening on port 3000");
server.listen(3000)
