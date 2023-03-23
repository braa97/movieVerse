const express = require("express");
const router = express.Router();
const path = require('path')
const MovieQuerys = require("../utilites/databaseQuerys");
const movieQuery = new MovieQuerys();
const {Review} = require('../models/movieSchema')

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

router.post(`/review`, function (req, res) {
  const text = req.body.text
  const movieId = req.body.movieId
  const data = new Review({text, movie: movieId})
  data.save()
  .then(() =>{
    movieQuery.addReviewToMovie(movieId, data)
    .then((movie) => {
      res.status(200).send(movie)
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
