const jwt =require('jsonwebtoken')
const User =  require('../model/user')
const bcrypt = require('bcrypt')

exports.signup = async (req,res)=>{
    const {names,password} = req.body
    try {
        const hashedPassword= await bcrypt.hash(password,10)
        const exists = await User.findOne({names:names})
        if(exists){
            return res.json({msg: 'user already exists'})
        }
        const user = await User.create({
            names,
            password: hashedPassword
        }) 
        res.status(200).json({msg: "well submited"})
    } catch (error) {
        console.log(error)
        return res.status(400).json({error})
    }
}
exports.login = async (req,res)=>{
    const {names , password} =  req.body
    try {
        const user = await User.findOne({names:names})
        if(!user){
            return res.status(400).json({msg: "user doesn't exist , please register first"})
        }
        const isValid = await bcrypt.compare(password,user.password)
        if(!isValid){
            return res.json({msg: "credentials not correct"})
        }
        const userToken = jwt.sign({_id:user._id},process.env.JWT_SECRET)
        res.cookie(userToken,"userToken",{httpOnly: true})
        res.status(200).json({msg:"well authenticated"})

    } catch (error) {
        console.log(error)
        res.json({msg: "internal server error"})
    }

}