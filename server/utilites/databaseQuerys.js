const Movie = require('../models/movieSchema.js');

class MovieQuerys {
    constructor(){}

    getMovies() {
        return  Movie.find({})
    }

    getMovieByName(movieName) {
        return Movie.find({title : movieName })
    }
}

module.exports = MovieQuerys;