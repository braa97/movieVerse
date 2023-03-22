const express = require("express");
const router = express.Router();
const path = require('path')
const MovieQuerys = require("../utilites/databaseQuerys");
const movieQuery = new MovieQuerys();

router.use("/", function (req, res) {
  res.sendFile(path.join(__dirname, '../../dist/movie'))
});

router.get("/", function (req, res) {
  let movieId = req.query.id
  movieQuery.getMovieById(movieId)
  .then((data) => {
    res.status(200).send(data);
  })
  .catch((err) => {
    res.status(400).send(err);
  });
});

module.exports = router;
