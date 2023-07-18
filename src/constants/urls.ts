export const accessToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzYwZjY5NjdkNzljM2I1OWQyNjljYjdjYzc2MzgzYyIsInN1YiI6IjY0NWY5NjY1YTY3MjU0MDE2NGRkODVlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z2n-Hd6NenF1X71SMmMpGAhXUN9iYopyE22RpKlKKWo";

const baseURL = 'https://api.themoviedb.org/3';

const urls = {
    movies: {
        discover: `/discover/movie`,
        movieById: (id: string): string => `/movie/${id}`,
        lists: (movie_id: number): string => `/movie/${movie_id}/lists`,
        popular: `/movie/popular`,
        genresList: `/genre/movie/list`,
        moviesOfGenre: (id: number): string => `/genre/${id}/movies`,
        searchMovie: (searchTerm: string | number): string => `/search/movie?query=${searchTerm}`,
        video: (id: number): string => `/movie/${id}/videos`
    }
};

export {
    baseURL,
    urls
};