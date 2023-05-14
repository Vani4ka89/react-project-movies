import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IPagination} from "../../interfaces/pagination.interface";
import {IMovie} from "../../interfaces/movie.interface";
import {movieService} from "../../services/movie.service";

interface IState {
    movie: IMovie;
}

const initialState: IState = {
    movie: null
}

const get = createAsyncThunk<IPagination<IMovie[]>, void>(
    'movieSlice/get',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await movieService.get();
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const slice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder

});

const {reducer: movieReducer, actions} = slice;

const movieActions = {
    ...actions,
    get
}

export {
    movieReducer,
    movieActions
}