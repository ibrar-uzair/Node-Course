

const http=require('http')

const server =http.createServer((req,res)=> {
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My first Application</title>');
    res.write('<body><h1>Hello from Node JS Server</h1></body>');
    res.write('</html>');
    res.end();
})


server.listen(3000)