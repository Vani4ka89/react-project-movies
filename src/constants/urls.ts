export const accessToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzYwZjY5NjdkNzljM2I1OWQyNjljYjdjYzc2MzgzYyIsInN1YiI6IjY0NWY5NjY1YTY3MjU0MDE2NGRkODVlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z2n-Hd6NenF1X71SMmMpGAhXUN9iYopyE22RpKlKKWo";

export const APIKey = "e454e630cd056e6159b3326042bb5df5";

const baseURL = "https://api.themoviedb.org/3";

const posterBaseUrl = "https://image.tmdb.org/t/p/w500";

const urls = {
    movies: {
        discover: `/discover/movie`,
        movieById: (movieId: string): string => `/movie/${movieId}`,
        lists: (movie_id: number): string => `/movie/${movie_id}/lists`,
        popular: `/movie/popular`,
        genresList: `/genre/movie/list`,
        moviesOfGenre: (genreId: number): string => `/genre/${genreId}/movies`,
        searchMovie: (searchTerm: string | number): string => `/search/movie?query=${searchTerm}`,
        video: (id: number): string => `/movie/${id}/videos`
    }
};

export {
    baseURL,
    posterBaseUrl,
    urls
};