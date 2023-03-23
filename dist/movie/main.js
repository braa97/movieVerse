const movieModel = new Model();
const render = new Renderer();

let url = window.location.href
let id = url.split('=')

movieModel.getMovieById(id[1]).then(() => {
    render.renderOneMovie(movieModel.allData[0])
    let genre = movieModel.allData[0].genre[0]
    movieModel.getRecommendedMovies(genre)
    .then(() => {
        render.renderRecommendedMovie(movieModel.allData)
        render.renderReview(movieModel.allData[0])
    })
})

$('.movie-content').on('click', '#addReview', function() {
    let text = $(this).siblings('#reviewText').val()
    let review = {}
    review.text = text
    review.movieId = movieModel.allData[0]._id
    movieModel.addReview(review)
    .then(() => {
        render.renderReview(movieModel.allData[0])
        $(this).siblings('#reviewText').val('')
    })
})