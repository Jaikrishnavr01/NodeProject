const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    activationCode: {
        type: String,
        required: true,
        default: null
    },
    isActivation:{
        type: Boolean,
        required: true,
        default: false
    }
})

const usermodel = mongoose.model('user',userSchema)

module.exports = usermodel