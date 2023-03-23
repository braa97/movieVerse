const movieModel = new Model();
const render = new Renderer();


window.onload = function () {
    movieModel.getAllMovies("", "" , "")
    .then(() => {
      render.renderAllMovies(movieModel.history);
      });
}

