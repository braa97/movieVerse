class Model {
  constructor() {
    this._moviesData = [];
    this._movie = [];
  }

  getAllMovies(rating,category ,year) {
    this._moviesData = [];
      return $.get(`/home/movies?rating=${rating}&genre=${category}&year=${year}`)
      .then((moviesDataResult) => {
        moviesDataResult.forEach((element) => {
          this._moviesData.push(element);
        });
      });
  }

  getMovieByName(movieName) {
    this._moviesData = [];
    return $.get(`/home/${movieName}`)
    .then((movie)=> {
      this._moviesData.push(movie);
    })
  }

  get allData(){
    return this._moviesData
  }
}