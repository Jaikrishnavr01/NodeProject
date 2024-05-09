const http = require('node:http')

const server = http.createServer((req, res)=> {

    res.setHeader('access-control-allow-orgin' ,'*');  //control the access 

    if(req.url === '/') {
        res.end('Welcome to our home page')
    }
    else if(req.url === '/about') {
        res.end('Welcome to About page')
    }
    else if(req.url === '/api') {
        res.writeHead(200, {"content-type": "application/json"});
        res.end(JSON.stringify({
            name: "John",
            age: 20
        }))

    }
    else{
        res.writeHead(404)
        res.end("page not found")
    }
})

server.listen(3003, ()=> {
    console.log("server is listening on port 3003") 
} )