import {IRes} from "../types";
import {IGenreList} from "../interfaces";
import {axiosService} from "./axios.service";
import {urls} from "../conatants";

class GenreService {
    getGenres(): IRes<IGenreList> {
        return axiosService.get(urls.movies.genreList)
    }
}

export const genreService = new GenreService();