class model {
  constructor() {
    this.moviesData = [];
  }

  getAllMovies() {
    return $.get("/movies").then((moviesDataResult) => {
      this.moviesData = moviesDataResult;
      return this.moviesData;
    });
  }
}
