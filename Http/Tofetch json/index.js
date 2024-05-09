const http = require('node:http')
const db = require('./db.json')

const server = http.createServer((req,res) => {
    res.writeHead(200, {"content-type":"application/json"})
    res.end(JSON.stringify(db))
    
})

server.listen(3001,() => {
    console.log("server is running on port 3001")
})