const express = require('express')
const app = express()
const port = 4000
const cors = require('cors')
const userRoutes = require('./routes/user')
const { default: mongoose } = require('mongoose')
require('dotenv').config()

app.use(cors())

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


app.get('/',(req,res)=>{
    res.json({msg: "welcome to the app"})
})

app.post('/login',userRoutes)
app.post('/signup',userRoutes)
