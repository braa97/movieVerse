const express = require("express");
const router = express.Router();
const MovieQuerys = require("../utilites/databaseQuerys");
const movieQuery = new MovieQuerys();


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
