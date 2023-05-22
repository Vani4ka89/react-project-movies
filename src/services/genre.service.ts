import {IRes} from "../types";
import {IGenreList, IMovieList} from "../interfaces";
import {axiosService} from "./axios.service";
import {urls} from "../constants";

class GenreService {
    getGenres(): IRes<IGenreList> {
        return axiosService.get(urls.movies.genreList)
    }

    getById(id: number): IRes<IMovieList> {
        return axiosService.get(urls.movies.moviesOfGenre(id))
    }
}

export const genreService = new GenreService();