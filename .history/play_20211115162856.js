

const http=require('http')

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

})


server.listen(3000)
