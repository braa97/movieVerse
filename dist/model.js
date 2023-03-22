class Model {
  constructor() {
    this._moviesData = [];
    this._movie = [];
  }
  getAllMovies(rating, category, year,page ,limit=5) {
    this._moviesData = [];
    const url = `/movies?rating=${rating}&genre=${category}&year=${year}&page=${page}&limit=${limit}`;
    return $.get(url)
      .then((moviesDataResult) => {
        moviesDataResult.data.forEach((element) => {
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
