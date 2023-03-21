class renderer {
  constructor() {}
  
  renderApts(movies) {
    $("#results").empty();
    const source = $(`#results-movies`).html();
    const template = Handlebars.compile(source);
    const newHtml = template(movies);
    $(`#results`).append(newHtml);
  }
}