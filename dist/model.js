class Model {
  constructor() {
    this._moviesData = [];
    this._favoriteMovies = [];
    this._historyData = [];
  }

  getAllMovies(rating,category ,year) {
    this._moviesData = [];
      return $.get(`/movies?rating=${rating}&genre=${category}&year=${year}`)
      .then((moviesDataResult) => {
        moviesDataResult.forEach((element) => {
          this._moviesData.push(element);
        });
      });
  }

  getMovieByName(movieName){
    this._moviesData = [];
    return $.get(`/movie/${movieName}`)
    .then((movie)=> {
      this._moviesData.push(movie);
      
    })
  }


  addToFavorite(movieId) {
    return $.post(`movie` , movieId)
    .then((movie)=> {
        this._favoriteMovies.push(movie);
    })
  }

  addToHistory(movieId) {
    return $.post(`movie` , movieId)
    .then((movie)=> {
        this._historyData.push(movie);
    })
  }


  get history(){
    return this._historyData
  }
  get favorite(){
    return this._favoriteMovies
  }
  get allData(){
    return this._moviesData
  }
}
