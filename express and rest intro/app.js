const express = require('express')

const app = express()

app.use('/hello',(req,res,next)=>{
    console.log(hi)
    next()
})

app.use('/',(req,res,next)=>{
    console.log('hello')
})


app.listen(3000)

