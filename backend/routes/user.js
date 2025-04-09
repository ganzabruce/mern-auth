const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')


router.get('/',(req,res)=>{
    res.json({msg : "home"})
})
router.post('/signup',(req,res)=>{
    res.json({msg: "register user"})
})
router.post('/login',(req,res)=>{
    res.json({msg: "login user"})
})

module.exports = router 