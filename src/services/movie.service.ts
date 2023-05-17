import {IRes} from "../types";
import {IMovie, IPagination} from "../interfaces";
import {axiosService} from "./axios.service";
import {accessToken, urls} from "../conatants";

class MovieService {

    getAllMovies(page = 1): IRes<IPagination<IMovie[]>> {
        return axiosService.get(urls.movies.discover, {params: {page}})
    }


    getAccessToken(): string {
        return accessToken
    }

}

export const movieService = new MovieService();