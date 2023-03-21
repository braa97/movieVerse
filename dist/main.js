const movieModel = new Model();
const renderer = new Renderer();

movieModel.getAllMovies().then((moviesData) => {
  renderer.render(moviesData);
});
