const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')


router.get('/',(req,res)=>{
    res.json({msg : "home"})
})
router.post('/signup',userController.signup)
router.post('/login',userController.login)

module.exports = router 