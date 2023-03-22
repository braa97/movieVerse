const express = require("express");
const router = express.Router();
const MovieQuerys = require("../utilites/databaseQuerys");
const movieQuery = new MovieQuerys();

router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, '../../dist/movie', 'index.html'))
  });

router.get("/:id", function (req, res) {

});




router.post("/movie" , function (req, res) {
  let movieId = req.body.id;
  movieQuery.getMovieById(movieId)
  .then((data) => {
    res.status(200).send(data);
  })
  .catch((err) => {
    res.status(400).send(err);
  });

})
module.exports = router;
