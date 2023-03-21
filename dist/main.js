const movieModel = new model();
const render = new renderer();

movieModel.getAllMovies().then((moviesData) => {
  render.renderApts(moviesData);
});
