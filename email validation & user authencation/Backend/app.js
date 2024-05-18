const express = require('express')
const connectDb = require('./config/db')

const user = require('./routers/user')
require('dotenv').config()

const app = express()

//monogo db 
connectDb()

app.get("/" ,(req, res) => {
    res.send("Home Page")
})


app.use('/auth', user)



app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})