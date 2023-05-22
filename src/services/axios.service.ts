import axios from "axios";

import {baseURL} from "../constants";
import {movieService} from "./movie.service";

const axiosService = axios.create({baseURL});

axiosService.interceptors.request.use(res => {
    const access = movieService.getAccessToken();
    if (access) {
        res.headers.Authorization = `Bearer ${access}`
        return res
    }
})

export {
    axiosService
};