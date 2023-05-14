export const accessToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzYwZjY5NjdkNzljM2I1OWQyNjljYjdjYzc2MzgzYyIsInN1YiI6IjY0NWY5NjY1YTY3MjU0MDE2NGRkODVlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z2n-Hd6NenF1X71SMmMpGAhXUN9iYopyE22RpKlKKWo";

const baseURL = 'https://api.themoviedb.org/3';

const urls = {
    movies: {
        discover: `/discover/movie`,
        genreList: `/genre/movie/list`,
    }
};

export {
    baseURL,
    urls
};