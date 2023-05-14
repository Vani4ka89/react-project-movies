const baseURL = 'https://api.themoviedb.org';

const movies = '/3';

const urls = {
    movies: {
        discover : `${ movies }/discover/movie`,
        search   : `${ movies }/search/movie`,
        popular  : `${ movies }/movie/popular`,
        genreList: `${ movies }/genre/movie/list`,
    }
}

export {
    baseURL,
    urls
}