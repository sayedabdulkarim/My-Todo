const express = require('express')
const app = express()

const todoControllers = require('./controllers/todoControllers')

app.use(express.urlencoded({ extended: false}))

app.set('view engine', 'ejs')

app.use(express.static('./public'))

todoControllers(app)

app.listen(process.env.PORT || 3000)