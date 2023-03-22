const movieModel = new Model();
const render = new Renderer();

let url = window.location.href
let id = url.split('=')

movieModel.getMovieById(id[1]).then(() => {
    render.renderOneMovie(movieModel.allData[0])
})