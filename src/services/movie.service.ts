import {IRes} from "../types";
import {IMovie, IMovieList} from "../interfaces";
import {axiosService} from "./axios.service";
import {accessToken, urls} from "../constants";

class MovieService {

    getAllMovies(page = 1): IRes<IMovieList> {
        return axiosService.get(urls.movies.discover, {params: {page}})
    }

    getMovieById(id: number): IRes<IMovie> {
        return axiosService.get(urls.movies.movieById(id))
    }

    getMoviesOfGenre(id:number):IRes<IMovieList>{
        return axiosService.get(urls.movies.moviesOfGenre(id))
    }

    getAccessToken(): string {
        return accessToken
    }

}

export const movieService = new MovieService();