import {IRes} from "../types";
import {IGenre} from "../interfaces";
import {axiosService} from "./axios.service";
import {urls} from "../conatants";

class GenreService {
    getGenres(): IRes<IGenre[]> {
        return axiosService.get(urls.movies.genreList)
    }
}

export const genreService = new GenreService();