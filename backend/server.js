const express = require('express')
const app = express()
const port = 4000
const userRoutes = require('./routes/user')
require('dotenv').config()

app.use('/api/user',userRoutes)

app.get('/',(req,res)=>{
    res.json({msg: "welcome to the app"})
})

app.listen(port ,()=>{
    console.log(`app is running on port ${port}`)
})