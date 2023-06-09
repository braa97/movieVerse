const movieModel = new Model();
const render = new Renderer();


function renderCurrentPage() {
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit
  const movies = movieModel.allData.slice(startIndex, endIndex)
  render.renderData(movies)
}

window.onload = function () {
  movieModel.getAllMovies("", "" , "")
  .then(() => {
    render.renderAllMovies(movieModel.allData);
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
      render.renderAllMovies(movieModel.allData);
    })
  }
  else{
    movieModel.getAllMovies(rating,category,year,page,limit)
    .then(() => {
      render.renderAllMovies(movieModel.allData);
    });
  }
})


$('.movie-collection').on('click','.fa-heart' ,function(){
  const movieId = $(this).closest('.movie').data()
  movieModel.addToFavorite(movieId)
  .then(() => {
      render.renderAllMovies(movieModel.favorite)
    //$(this).removeClass("fa-regular").addClass("fa-solid")
  })
})

$('.prev-page-btn').on('click', function() {
  if (page > 1) {
      page--
    renrenderCurrentPage(data.allData)
  }
})

$('.next-page-btn').on('click', function() {
  const numPages = Math.ceil(movieModel.allData.length / limit);
  if (page < numPages) {
    page++;
    // $.get(`/movies?rating=${rating}&genre=${category}&year=${year}&page=${page}&limit=${limit}`) 
    //   .then((data) => {
          renrenderCurrentPage(data)
      // })
  }
});


$('.movie-collection').on('click', 'img' , function(){
  const movieId = $(this).closest('.movie').data().id
  window.location.href = `/movie/index.html?id=${movieId}`
})

$('.user').on('click', function () {
  window.location.href = `/login/index.html`
})

$('#history').on('click', function() {
  window.location.href = `/history/index.html`
})

$('#browse').on('click', function() {
  window.location.href = `/browse/index.html`
})