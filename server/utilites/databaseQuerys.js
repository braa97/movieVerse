const {Movie , Review} = require("../models/movieSchema");

class MovieQuerys {
  constructor() {}

  getMovies(query) {
    if (query) {
      return Movie.find(query)
    }
    else {
      return Movie.find({});
    }
  }

  getMovieByName(movieName) {
    return Movie.findOne({ title: movieName });
  }

  getMovieById(movieId) {
    return Movie.findById(movieId);
  }

  getTopFourMovies(genre) {
    return Movie.find({genre: genre}).limit(4);
  }

  addReviewToMovie(movieId , review) {
    return Movie.findByIdAndUpdate(movieId, {$push: {reviews: review}}, {new: true})
    .populate("reviews")
    .exec(function (err, movie) {
      console.log(movie.reviews)
  })
  }

  getReviews(movieId) {
    return Movie.findById(movieId)
    .populate("reviews")
    .exec(function (err, movie) {
        console.log(movie.reviews)
    })
}


  


}

module.exports = MovieQuerys;
