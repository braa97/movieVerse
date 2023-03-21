const express = require("express");
const router = express.Router();
const axios = require('axios')
const MovieQuerys = require('../utilites/databaseQuerys');
const query = new MovieQuerys()

router.get('/movies' , function (req, res) {
    query.getMovies()
    .then((data) => {
        res.status(200).send(data);
    })
    .catch((err) => {
        res.status(400).send(err);
    });
})

router.get('/movies/:movieName', function (req, res) {
    const movie = req.params.movieName
    query.getMovieByName(movie)
    .then((data) => {
        res.status(200).send(data);
    })
    .catch((err) => {
        res.status(400).send(err);
      });
})

module.exports = router;