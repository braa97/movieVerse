class Model {
  constructor() {
    this._moviesData = [];
  }

  getAllMovies() {
      return $.get(`/movies`)
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
