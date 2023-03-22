const movieModel = new Model();
const render = new Renderer();


let page  =1 
const limit = 10

function renderCurrentPage() {
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit
  const movies = movieModel.allData.slice(startIndex, endIndex)
  render.renderData(movies)
}

window.onload = function () {
  movieModel.getAllMovies("", "" , "")
  .then(() => {
<<<<<<< HEAD
    render.renderAllMovies(movieModel.allData);
=======
    renderCurrentPage()
>>>>>>> b7c2946e8c8bf9228432e32ae852f09c3ada2d81
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
<<<<<<< HEAD
      render.renderAllMovies(movieModel.allData);
=======
      renderCurrentPage()
>>>>>>> b7c2946e8c8bf9228432e32ae852f09c3ada2d81
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
  
  $('.movie-collection').on('click', 'img' , function(){
    const movieId = $(this).closest('.movie').data().id
    window.location.href = `/movie/index.html?id=${movieId}`
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
