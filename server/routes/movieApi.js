const express = require("express");
const router = express.Router();
const MovieQuerys = require("../utilites/databaseQuerys");
const movieQuery = new MovieQuerys();

router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, '../../dist/movie', 'index.html'))
  });

router.get("/:id", function (req, res) {

});


module.exports = router;
