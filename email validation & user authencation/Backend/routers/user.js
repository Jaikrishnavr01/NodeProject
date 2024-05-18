const express = require('express')
const{signup, activate} = require('../controllers/Auth.controller')

const bodyParser = require('body-parser')

const router = express.Router()
router.use(bodyParser.json())

router.post('/signup',  signup);
router.get('/activate/:activationCode', activate);

module.exports = router 