const movieModel = new Model();
const render = new Renderer();

let url = window.location.href
console.log(url);
let id = url.split('=')
console.log(id[1]);