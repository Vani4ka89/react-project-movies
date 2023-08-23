import {IRes} from "../types";
import {IGenreBadge, IGenreBadgePagination, IMovie, IPagination} from "../interfaces";
import {axiosService} from "./axios.service";
import {urls} from "../constants";

class GenreService {
    getAll(): IRes<IGenreBadgePagination<IGenreBadge[]>> {
        return axiosService.get(urls.movies.genresList)
    }

    getById(genreId: number, page: number): IRes<IPagination<IMovie[]>> {
        return axiosService.get(urls.movies.moviesOfGenre(genreId), {params: {page}})
    }
}

export const genreService = new GenreService();