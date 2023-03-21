const movieModel = new Model();
const render = new Renderer();



window.onload = function () {
  movieModel.getAllMovies("", "" , "")
  .then(() => {
    render.renderData(movieModel.allData);
    });
}

$('.search-btn').on('click', function(){
  const movie = $('#input-movie').val();
  const year = $('#year-input').val()
  const rating = $('#rating option:selected').val();
  const category = $('#genres option:selected').val()
  

  if(movie){
    movieModel.getMovieByName(movie)
    .then(() => {
      render.renderData(movieModel.movie);
    })
  }
  else{
    movieModel.getAllMovies(rating,category,year)
    .then(() => {
      render.renderData(movieModel.allData);
    });
  }
    
})






// const history = []
// $("#results").on('click','img', function() {
//   const movieId = $(this).closest('.result')
//   history.push(movieId)
//   console.log(history)
//   alert(movieId)
// })


