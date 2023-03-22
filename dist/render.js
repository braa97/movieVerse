class Renderer {
    constructor() {}
    
  renderData(movies) {
    $(".movie-collection").empty();
    const source = $(`#movieTemplate`).html();
    const template = Handlebars.compile(source);
    const newHtml = template(movies);
    $(`.movie-collection`).append(newHtml);
  }
}