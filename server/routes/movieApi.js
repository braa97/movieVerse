const express = require("express");
const router = express.Router();
const path = require('path')
const MovieQuerys = require("../utilites/databaseQuerys");
const {Review} = require('../models/movieSchema');
const movieQuery = new MovieQuerys();

router.get("/:id", function (req, res) {
  let movieId = req.params.id
  movieQuery.getMovieById(movieId)
  .then((data) => {
    res.status(200).send(data);
  })
  .catch((err) => {
    res.status(400).send(err);
  });
});

router.get(`/genre/:genre`, function(req, res) {
  let genre = req.params.genre
  movieQuery.getTopFourMovies(genre)
  .then((data) => {
    res.status(200).send(data);
  })
  .catch((err) => {
    res.status(400).send(err);
  });
})

router.post(`/review/:movieId`, function (req, res) {
  const text = req.body.review
  const movieId = req.params.movieId
  const data = new Review({text, movie: movieId})
  data.save()
  .then(() =>{
    movieQuery.addReviewToMovie(movieId, data)
    .then((movie) => {
      res.status(200).send(`The review is saved successfully for ${movie.title}`)
    })
    .catch((err) => {
      res.status(400).send(`Failed to add review to movie: ${err}`)
    })
  })
  .catch((err) => {
    res.status(400).send(`Failed to save review: ${err}`)
  })
})

module.exports = router;
