const movieModel = new Model();
const renderer = new Renderer();



window.onload = function () {
  movieModel.getAllMovies(null , null)
  .then((moviesData) => {
    renderer.render(moviesData);
    });
}

$('.search-btn').on('click', function(){
  
  const category = $('#genres option:selected').val()
  const year = $('.year').val()
  
    movieModel.getAllMovies(category,year)
    .then((moviesData) => {
      renderer.render(moviesData);
    });
})






// const history = []
// $("#results").on('click','img', function() {
//   const movieId = $(this).closest('.result')
//   history.push(movieId)
//   console.log(history)
//   alert(movieId)
// })


