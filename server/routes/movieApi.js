const express = require("express");
const router = express.Router();
const path = require('path')
const MovieQuerys = require("../utilites/databaseQuerys");
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

module.exports = router;
