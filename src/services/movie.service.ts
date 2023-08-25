import {IRes} from "../types";
import {IMovie, IPagination} from "../interfaces";
import {axiosService} from "./axios.service";
import {accessToken, urls} from "../constants";
import {IVideo, IVideoPagination} from "../interfaces/video.interface";

class MovieService {

    getAll(page = 1): IRes<IPagination<IMovie[]>> {
        return axiosService.get(urls.movies.discover, {params: {page}})
    }

    getById(movieId: string): IRes<IMovie> {
        return axiosService.get(urls.movies.movieById(movieId))
    }

    getAllOfGenre(id: number): IRes<IPagination<IMovie[]>> {
        return axiosService.get(urls.movies.moviesOfGenre(id))
    }

    search(searchTerm: string | number, page: number): IRes<IPagination<IMovie[]>> {
        return axiosService.get(urls.movies.searchMovie(searchTerm), {params: {page}})
    }

    getVideo(movieId: number): IRes<IVideoPagination<IVideo[]>> {
        return axiosService.get(urls.movies.video(movieId))
    }

    getAccessToken(): string {
        return accessToken
    }

}

export const movieService = new MovieService();