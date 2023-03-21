const movieModel = new model();
const renderer = new render();

movieModel.getAllMovies().then((moviesData) => {
  renderer.renderMovie(moviesData);
});
