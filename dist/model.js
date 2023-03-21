class model {
  constructor() {
    this.moviesData = [];
  }

  getAllMovies() {
    return $.get("/movies").then((moviesDataResult) => {
      moviesDataResult.forEach(element => {
        this.moviesData.push(element);
      });
    });
  }
}
