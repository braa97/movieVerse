class model {
  constructor() {
    this.moviesData = [];
  }

  getAllMovies() {
    return $.get("/movies").then((moviesDataResult) => {
      this.moviesData.push(moviesDataResult);
      return this.moviesData;
    });
  }
}
