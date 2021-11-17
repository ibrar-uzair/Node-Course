

const http=require('http');
const { parse } = require('path/posix');

const server =http.createServer((req,res)=> {
   

    let url=req.url
    if(url==='/'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>My first Application</title>');
        res.write('<body><form method="POST" action="/name"><input type="text"> Enter you name </input><button type="submit">Submit</button></form></body>');
        res.write('</html>');
        res.end();
    }
    if(url==='/name' && req.method==="POST"){

        const body=[]
        var mes;
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk)
        })

        req.on('end',()=>{
            const parseBody=Buffer.concat(body).toString();
            const message=parseBody.split('=')[1];
            mes=message
            console.log(message)
            console.log(mes)
        })

        console.log(body);

        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>My first Application</title>');
        res.write('<body><h1> Hello </h1></body>');
        res.write('</html>');
        res.end();
    }

})


server.listen(3000)
