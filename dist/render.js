class renderer {
    constructor() {}
    
  renderMovies(movies) {
    const source = $(`#results-movies`).html();
    const template = Handlebars.compile(source);
    const newHtml = template(movies);
    $(`#results`).empty().append(newHtml);
  }
}
