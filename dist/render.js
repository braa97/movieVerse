class Renderer {
    constructor() {}
    
  render(movies) {
    $("#movieTemplate").empty();
    const source = $(`#movie-collection`).html();
    const template = Handlebars.compile(source);
    const newHtml = template(movies);
    $(`#movieTemplate`).append(newHtml);
  }
}
