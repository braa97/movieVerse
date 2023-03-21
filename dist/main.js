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






// const history = []
// $("#results").on('click','img', function() {
//   const movieId = $(this).closest('.result')
//   history.push(movieId)
//   console.log(history)
//   alert(movieId)
// })


