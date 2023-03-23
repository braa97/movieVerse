const movieModel = new Model();
const render = new Renderer();


$('#home').on('click', function () {
  window.location.href = `/home/index.html`
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


$('.search-btn').on('click', function(){
    const movie = $('#input-movie').val();
    const year = $('#year-input').val()
    const rating = $('#rating option:selected').val();
    const category = $('#genres option:selected').val()

    if(movie){
      movieModel.getMovieByName(movie)
      .then(() => {
        render.renderAllMovies(movieModel.allData);
        $('#input-movie').val('');
      })
    }
    else{
      movieModel.getAllMovies(rating,category,year)
      .then(() => {
        render.renderAllMovies(movieModel.allData);
      });
    }
  })

