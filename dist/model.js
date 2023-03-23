class Model {
  constructor() {
    this._moviesData = [];
    this._favoriteMovies = [];
    this._historyData = [];
  }
  
  getAllMovies(rating, category, year,page ,limit=5) {
    this._moviesData = [];
    return $.get(`/home/movies?rating=${rating}&genre=${category}&year=${year}&page=${page}&limit=${limit}`)
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

  getMovieById(movieId) {
    this._moviesData = [];
    return $.get(`/movie/${movieId}`)
    .then((movie) => {
      this._moviesData.push(movie);
    })
  }

  getRecommendedMovies(genre) {
    this._moviesData = [];
    return $.get(`/movie/genre/${genre}`)
    .then((movies) => {
      movies.forEach((movie) => {
        this._moviesData.push(movie);
      })
    })
  }

  addToFavorite(movieId) {
    return $.post(`movie` , movieId)
    .then((movie)=> {
        this._favoriteMovies.push(movie);
    })
  }

  addReview(review) {
    this._moviesData = []
    return $.post(`/movie/review` , review)
    .then((movie)=> {
        this._moviesData.push(movie);
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