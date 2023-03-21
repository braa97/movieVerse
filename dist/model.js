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


  get allData(){
    return this._moviesData
  }
}
