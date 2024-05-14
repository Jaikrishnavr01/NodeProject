const express = require('express')

const mongoose = require('mongoose')
const staff = require('./Router/Staffs')


const app = express()

// mongodb://localhost:27017/

mongoose.connect('mongodb://127.0.0.1:27017/staff')

mongoose.connection.on('connected',()=> {
    console.log("Monogodb is connected successfully");
})

 app.get('/', (req, res) => {
    res.send("Home Page")
 })

 app.use('/staff', staff )

app.listen(3001, () => {
    console.log("server runing on port 3001");
} )