import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IPagination} from "../../interfaces";
import {IMovie} from "../../interfaces";
import {movieService} from "../../services";

interface IState {
    movies: IMovie[];
    page: number;
}

const initialState: IState = {
    movies: [],
    page: 0
}

const getMovies = createAsyncThunk<IPagination<IMovie[]>, void>(
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
            .addCase(getMovies.fulfilled, (state, action) => {
                const {page, results} = action.payload
                state.movies = results
                state.page = page
            })
});

const {reducer: movieReducer, actions} = slice;

const movieActions = {
    ...actions,
    getMovies
}

export {
    movieReducer,
    movieActions
}