const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema ({
    text : String
})

const movieSchema = new Schema ({
    title : String,
    description : String,
    thumbnail : String ,
    rating : Number,
    usersRating : Number,
    raters : Number,
    year : Number ,
    trailer : String,
    imdbid: String,
    genre : [String],
    reviews: [reviewSchema]
})

const Review = mongoose.model("review", reviewSchema)
const Movie = mongoose.model("movie", movieSchema)
module.exports = {Movie , Review}