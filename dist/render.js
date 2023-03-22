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
    $(".movie-main-container").empty();
    const source = $('#movie-template').html();
    const template = Handlebars.compile(source);
    const newHtml = template({movie});
    $('.movie-main-container').append(newHtml);
  }

  renderReview(reviews) {
    $(".movie-main-container").empty();
    const source = $('#review-template').html();
    const template = Handlebars.compile(source);
    const newHtml = template({reviews});
    $('.movie-main-container').append(newHtml);
  }
}