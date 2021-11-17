

const http=require('http');
const { parse } = require('path/posix');

const routes=require("./routes")

const server =http.createServer(routes);

console.log("Server is listening on port 3000");
server.listen(3000)
