class Renderer {
    constructor() {}
    
  renderAllMovies(movies) {
    $(".movie-collection").empty();
    const source = $(`#movieTemplate`).html();
    const template = Handlebars.compile(source);
    const newHtml = template(movies);
    $(`.movie-collection`).append(newHtml);
  }

  renderOneMovie(movie) {
    $(".movie-content").empty();
    const source = $('#movie-template').html();
    const template = Handlebars.compile(source);
    const newHtml = template({movie});
    $('.movie-content').append(newHtml);
  }

  renderRecommendedMovie(movies) {
    $(".movie-recommendation").empty();
    const source = $('#recommended-movies').html();
    const template = Handlebars.compile(source);
    const newHtml = template(movies);
    $('.movie-recommendation').append(newHtml);
  }

  renderReview(reviews) {
    $(".movie-main-container").empty();
    const source = $('#review-template').html();
    const template = Handlebars.compile(source);
    const newHtml = template({reviews});
    $('.movie-main-container').append(newHtml);
  }
}