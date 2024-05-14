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

router.get('/get',(req, res) => {
    staffModel.find()
    .then(response => res.send(response))
    .catch((err) => console.log(err))
})
router.get('/get/:id', (req, res) => {
    console.log(req.params.id, req.params);
    staffModel.findById(req.params.id)
    .then((response) => {
        console.log(response);
       
        res.send(response);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).send("Error on getting id")
    });
 });
 
 router.put('/update/:id', (req, res) => {
     staffModel.findByIdAndUpdate(req.params.id, req.body)
     .then((response) => {
         console.log(response);
       
     })
     .catch((err) => {
         console.log(err)
     });
     res.send("Staff updated successfully");
 });
 

router.delete('/delete/:id',(req, res) => {
    staffModel.findByIdAndDelete(req.params.id)
    .then((response) => console.log(response))
    .catch((err) => console.log(err))
    res.send("staff delete page")
})

module.exports = router