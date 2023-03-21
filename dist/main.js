const movieModel = new Model();
const render = new Renderer();



window.onload = function () {
  movieModel.getAllMovies()
  .then(() => {
    render.renderData(movieModel.allData);
    });
}

$('.search-btn').on('click', function(){
  
  const category = $('#genres option:selected').val()
  const year = $('.year').val()
  
    movieModel.getAllMovies(category,year)
    .then((moviesData) => {
      render.renderData(moviesData);
    });
})


