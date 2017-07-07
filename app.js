const express = require('express')
const app = express()
const mustache = require('mustache-express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const novelsRoutes = require('./routes/novels')

app.engine('mustache', mustache())
app.set('view engine', 'mustache')
app.set('layout', 'layout')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))

mongoose.Promise = require('bluebird')
mongoose.connect('mongodb://localhost:27017/fantasy')

app.use(novelsRoutes)

app.listen(3000, function () {
  console.log("I'm listening")
})
