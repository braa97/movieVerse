const express = require('express')
const app = express()
const path = require('path')
const movieApi = require('./server/routes/movieApi')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/movieVerse", {
  useNewUrlParser: true,
}).catch((err)=> console.log(err))

app.use('/', movieApi)

const port = 4000
app.listen(port, function () {
    console.log(`Running on port http://localhost:${port}`)
})