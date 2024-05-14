const express = require("express")
const bodyParser = require('body-parser')
const staffModel = require('../Models/StaffModel')
const router = express()

router.use(bodyParser.json())

router.get('/',(req,res)=> {
    res.send("staff page")
})

router.post('/post',(req,res)=> {
console.log(req.body);
const newStaff =  new staffModel(req.body)

newStaff.save()
.then(response => console.log(response))
.catch(err => console.log(err))
res.send("staff postion page")
})



module.exports = router