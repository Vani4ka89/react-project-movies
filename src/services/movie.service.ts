import {IRes} from "../types";
import {IMovie, IPagination} from "../interfaces";
import {axiosService} from "./axios.service";
import {accessToken, urls} from "../conatants";
import {IOneMovie} from "../interfaces/OneMovieInterface";

class MovieService {

    getAllMovies(page = 1): IRes<IPagination<IMovie[]>> {
        return axiosService.get(urls.movies.discover, {params: {page}})
    }

    getMovieById(id: number): IRes<IOneMovie> {
        return axiosService.get(urls.movies.movieById(id))
    }


    getAccessToken(): string {
        return accessToken
    }

}

export const movieService = new MovieService();