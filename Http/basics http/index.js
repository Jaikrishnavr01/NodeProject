const http = require('node:http')
const server = http.createServer((req,res) => {
    res.writeHead(200, {"content-type" : "text/plain"})
    res.end("hello world") 
})

server.listen(3001,()=>{
    console.log("server is running on port 3001");
})

