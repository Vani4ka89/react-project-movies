import { IRes } from "../types/response.type";
import { IMovie } from "../interfaces/movie.interface";
import { IPagination } from "../interfaces/pagination.interface";
import { axiosService } from "./axios.service";
import { urls } from "../conatants/urls";

class MovieService {
    get(): IRes<IPagination<IMovie[]>> {
        return axiosService.get(urls.movies.discover)
    }
}

export const movieService = new MovieService()