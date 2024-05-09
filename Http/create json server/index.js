const http = require('node:http')
const json ={
    "nome": "joao",
    "idade": 20,
    "address": "assdv"
}

const server = http.createServer((req,res)=>{
    res.writeHead(200, {"content-type": "application/json"});
    res.end(JSON.stringify(json))
})

server.listen(3002 ,( )=> {
    console.log("server is running on port 3002" )
})