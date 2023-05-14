import axios from "axios";

import { baseURL } from "../conatants/urls";

const axiosService = axios.create({ baseURL });

export {
    axiosService
}