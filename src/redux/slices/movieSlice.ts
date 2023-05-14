import {createAsyncThunk, createSlice, isFulfilled, isRejectedWithValue} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IPagination, IError, IMovie} from "../../interfaces";
import {movieService} from "../../services";

interface IState {
    movies: IMovie[];
    page: number;
    error: IError;
}

const initialState: IState = {
    movies: [],
    page: 0,
    error: null
}

const getMovies = createAsyncThunk<IPagination<IMovie[]>, void>(
    'movieSlice/get',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getMovies();
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

            .addMatcher(isFulfilled(), state => {
                state.error = null
            })

            .addMatcher(isRejectedWithValue(), (state, action) => {
                state.error = action.payload
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