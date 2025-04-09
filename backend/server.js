const express = require('express')
const app = express()
const port = 4000
const cors = require('cors')
const userRoutes = require('./routes/user')
const mongoose = require('mongoose')
require('dotenv').config()
const cookieParser = require('cookie-parser')
const session  = require('express-session')
const MongoStore = require('connect-mongo')


app.use(cors())
app.use(cookieParser())

app.use(express.json())

mongoose.connect(process.env.DB_URL)
 .then(()=>{
    console.log('CONNECTED TO DB...')
    app.listen(port ,()=>{
        console.log(`app is running on port ${port}`)
    })
 })
 .catch(err=>{
    console.log(err)
 })
app.use(session({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized:true,
    store: MongoStore.create({
        mongoUrl:process.env.DB_URL 
    })
}))


app.get('/',(req,res)=>{
    res.json({msg: "welcome to the app"})
})

app.post('/login',userRoutes)
app.post('/signup',userRoutes)
