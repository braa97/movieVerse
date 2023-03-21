class Model {
  constructor() {
    this._moviesData = [];
    this._movie = [];
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
    this._movie = [];
    return $.get(`/movie/${movieName}`)
    .then((movie)=> {
      this._movie.push(movie);
      console.log(this._movie);
    })
  }




  get movie(){
    return this._movie;
  }
  get allData(){
    return this._moviesData
  }
}
