import {IRes} from "../types";
import {IGenre, IPaginateGenre} from "../interfaces";
import {axiosService} from "./axios.service";
import {urls} from "../conatants";

class GenreService {
    getGenres(): IRes<IPaginateGenre<IGenre[]>> {
        return axiosService.get(urls.movies.genreList)
    }
}

export const genreService = new GenreService();