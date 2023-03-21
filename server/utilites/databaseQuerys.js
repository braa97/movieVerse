const Movie = require("../models/movieSchema");

class MovieQuerys {
  constructor() {}

  getMovies(query) {
    if (query) {
      return Movie.find(query);
    } else {
      return Movie.find({});
    }
  }

  getMovieByName(movieName) {
    return Movie.find({ title: movieName });
  }
}

module.exports = MovieQuerys;
