const movieModel = new model();
const render = new renderer();

let history =[]

$("#results").on('click','img', function() {
  const movieId = ($(this).closest('.result').data().id)
  history.push(movieId)
  
  // localStorage.setItem("selectedMovie", JSON.stringify(this.movieId))
  // storeMovieTitle(movieId);
  console.log(history)
  // console.log(movieId)
  
})

movieModel.getAllMovies().then((moviesData) => {
  render.renderApts(moviesData);
});


// document.querySelector('#results').addEventListener('click', function(event) {
//   if (event.target.classList.contains('img')) {
//     let movieTitle = event.target.nextElementSibling.textContent;
//     storeMovieTitle(movieTitle);
//   }
// });

// document.querySelector('.history').addEventListener('click', function() {
//   const storedTitle = getAllMovies();
//   if (storedTitle) {
//     movieModel.getAllMovies(storedTitle).then((movieData) => {
//       render.renderApts(movieData);
//     });
//   }
// });

function storeMovieTitle(title) {
  localStorage.setItem('movie', title);
}

function getAllMovies() {
  const storedMovie = localStorage.getItem('movie');
  return storedMovie;
}

