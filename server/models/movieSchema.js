const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema ({
    title : String,
    description : String,
    thumbnail : String ,
    rating : String,
    usersRating : String,
    raters : Number,
    year : Number ,
    trailer : String,
    genre : [String]
})

const Movie = mongoose.model("movie", movieSchema)
module.exports = Movie