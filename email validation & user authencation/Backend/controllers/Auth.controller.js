const usermodel = require("../models/user-model");
const {v4:uuidv4} = require("uuid")
const bcrypt = require('bcryptjs')
const nodemailer = require('nodemailer')

exports.signup = async (req, res) => {
    const {username, email, password} = req.body;
    let user = await usermodel.findOne({email})
    if(user){ return res.status(400).json({msg: "User already exists"})}

    //generate random activation code
    const activationCode = uuidv4()

    //encrypt password
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)

    user= new usermodel({
        username,
        email,
        password: hashPassword,
        activationCode
    })
    await user.save()

    //senting code for  email activation

    const transport = nodemailer.createTransport({
        host:'smtp.office365.com', //smtp.office365.com  --> outlook, smtp.gmail.com ---> gmail 
        port:587, // 587 --> for outlook / gmail , 465 -> hostinger
   

    //change the setting to use less secure app

    auth:{
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
})

const activationLink = `http://localhost:${process.env.PORT}/auth/activate/${activationCode}`

const mailOptions ={
    from: process.env.Email_USER,
    to: email,
    subject: 'Account activation link',
    text:`click here to verify your email ${activationLink}`
}

transport.sendMail(mailOptions, (err, info) => {
    if(err) {
        console.log(err)
        return res.status(500).json({message:"cannot sent an email"})
    }
    else{
        return res.status(200).json({message:'Activation link sent to your email'})

    }
})

}


// to activate

exports.activate = async(req, res) => {
    const {activationCode} = req.params
    let user = await usermodel.findOne({activationCode})

    if(!user){
        res.status(500).json({message:"cannot sent a activation link"})
    }

    user.isActivated = true
    user.save()
    res.status(200).json({message:"Account is activated successfully"})
}


exports.signin = async(req, res) => {
    const {email, password} = req.body
     let user = await usermodel.findOne({email})
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const isMatching = await bcrypt.compare(password, user.password);
        if (!isMatching) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        if (!user.isActivated) {
            return res.status(400).json({ message: "Account need to be activated check your email" });
        }


        return res.status(200).json({
            message:"login Sucessfull",
            user
        })

}