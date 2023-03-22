const express = require("express");
const router = express.Router();
const MovieQuerys = require("../utilites/databaseQuerys");
const movieQuery = new MovieQuerys();

router.get("/movies", function (req, res) {
  const querys = {};
  const rating = req.query.rating;
  const year = req.query.year;
  const genre = req.query.genre;

  if (rating) {
    querys.rating = {$gt: rating}
  }
  if (year) {
    querys.year = year;
  }
  if (genre) {
    querys.genre = genre;
  }

  movieQuery.getMovies(querys)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.get("/:movieName", function (req, res) {
  const movie = req.params.movieName;
  movieQuery.getMovieByName(movie)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

module.exports = router;
