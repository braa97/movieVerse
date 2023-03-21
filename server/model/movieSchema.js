const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema ({
    title : String,
    description : String,
    thumbnail : String ,
    rating : [ratingSchema],
    year : Number ,
    trailer : String,
    category : [String]
})





const Movie = mongoose.model("movie", movieSchema)
module.exports = Movie