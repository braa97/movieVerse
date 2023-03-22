const express = require("express");
const router = express.Router();
const axios = require("axios");
const MovieQuerys = require("../utilites/databaseQuerys");
const movieQuery = new MovieQuerys();

router.get("/movies", function (req, res) {
  const querys = {};
  const rating = req.query.rating;
  const year = req.query.year;
  const genre = req.query.genre;
 
  let  page = 1 
  const limit =  10
  const startIndex = (page -1 ) * limit
  const endIndex = page * limit
  
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
      const paginatedData = data.slice(startIndex, endIndex)
      console.log(paginatedData);
      res.status(200).send({
        total: data.length,
        page,
        limit,
        data: paginatedData
      });
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});


router.get("/movie/:movieName", function (req, res) {
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
