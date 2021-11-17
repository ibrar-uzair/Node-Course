

const http=require('http');
const { parse } = require('path/posix');

const app=express();

app.use('/',(req,res,next)=>{
    console.log("In the middleware")
})

const routes=require("./routes")

const server =http.createServer(routes);

console.log("Server is listening on port 3000");
server.listen(3000)
