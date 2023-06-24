import {IRes} from "../types";
import {IMovie, IMovieList} from "../interfaces";
import {axiosService} from "./axios.service";
import {accessToken, urls} from "../constants";

class MovieService {

    getAll(page = 1): IRes<IMovieList<IMovie[]>> {
        return axiosService.get(urls.movies.discover, {params: {page}})
    }

    getById(id: number): IRes<IMovie> {
        return axiosService.get(urls.movies.movieById(id))
    }

    getAllOfGenre(id: number): IRes<IMovieList<IMovie[]>> {
        return axiosService.get(urls.movies.moviesOfGenre(id))
    }

    getAccessToken(): string {
        return accessToken
    }

}

export const movieService = new MovieService();