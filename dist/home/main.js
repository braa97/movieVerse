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
      render.renderData(movieModel.allData);
    })
  }
  else{
    movieModel.getAllMovies(rating,category,year)
    .then(() => {
      render.renderData(movieModel.allData);
    });
  }
})


$('.movie-collection').on('click','.fa-heart' ,function(){
    const movieId = $(this).closest('.movie').data()
    movieModel.addToFavorite(movieId)
    .then(() => {
       render.renderData(movieModel.favorite)
      //$(this).removeClass("fa-regular").addClass("fa-solid")
    })
  })


  $('.movie-collection').on('click', '.movie' , function(){
    const movieId = $(this).closest('.movie').data()
    movieModel.addToHistory(movieId)
    .then(() => {
      console.log(movieModel.history)
    })
    
  })

