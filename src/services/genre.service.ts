import {IRes} from "../types";
import {IGenre, IGenreList, IMovie, IPagination} from "../interfaces";
import {axiosService} from "./axios.service";
import {urls} from "../constants";

class GenreService {
    getAll(): IRes<IGenreList<IGenre[]>> {
        return axiosService.get(urls.movies.genresList)
    }

    getById(id: number): IRes<IPagination<IMovie[]>> {
        return axiosService.get(urls.movies.moviesOfGenre(id))
    }
}

export const genreService = new GenreService();