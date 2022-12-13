const express = require('express')
const userRoutes = require('./routes/user')
const productRoutes = require('./routes/product')
const path = require('path')

const app = express()

app.set('view engine','ejs')


app.use(userRoutes)
app.use(productRoutes)



app.listen(3000)

