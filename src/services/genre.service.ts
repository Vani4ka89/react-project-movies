import {IRes} from "../types";
import {IGenreList, IMovie, IMovieList} from "../interfaces";
import {axiosService} from "./axios.service";
import {urls} from "../conatants";

class GenreService {
    getGenres(): IRes<IGenreList> {
        return axiosService.get(urls.movies.genreList)
    }

    getById(id: number): IRes<IMovie[]> {
        return axiosService.get(urls.movies.moviesOfGenre(id))
    }
}

export const genreService = new GenreService();