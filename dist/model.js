class model {
  constructor() {
    this._moviesData = [];
  }

  getAllMovies(category , year) {
      return $.get(`/movies?genre=${category}&year=${year}`)
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
