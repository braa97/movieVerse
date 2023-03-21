const movieModel = new model();
const render = new renderer();



window.onload = function () {
  movieModel.getAllMovies(null , null)
  .then((moviesData) => {
    render.renderMovies(moviesData);
    });
}

$('.search-btn').on('click', function(){
  
  const category = $('#genres option:selected').val()
  const year = $('.year').val()
  
    movieModel.getAllMovies(category,year)
    .then((moviesData) => {
      render.renderMovies(moviesData);
    });
})






// const history = []
// $("#results").on('click','img', function() {
//   const movieId = $(this).closest('.result')
//   history.push(movieId)
//   console.log(history)
//   alert(movieId)
// })