import {AxiosError} from "axios";
import {createAsyncThunk, createSlice, isFulfilled, isRejectedWithValue} from "@reduxjs/toolkit";

import {IPagination, IError, IMovie} from "../../interfaces";
import {movieService} from "../../services";

interface IState {
    movie: IMovie;
    movies: IMovie[];
    page: number;
    error: IError;
    total_pages: number;
    total_results: number;
}

const initialState: IState = {
    movie: null,
    error: null,
    movies: [],
    page: 1,
    total_pages: null,
    total_results: null
}

interface IPage {
    page: number
}

const getMovie = createAsyncThunk<IMovie, { id: number }>(
    'movieSlice/getMovie',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getMovieById(id);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const getMovies = createAsyncThunk<IPagination<IMovie[]>, IPage>(
    'movieSlice/getMovies',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAllMovies(page);
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
            .addCase(getMovie.fulfilled, (state, action) => {
                state.movie = action.payload
            })

            .addCase(getMovies.fulfilled, (state, action) => {
                const {page, results, total_pages, total_results} = action.payload
                state.movies = results
                state.page = page
                state.total_pages = total_pages
                state.total_results = total_results
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
    getMovie,
    getMovies
}

export {
    movieReducer,
    movieActions
}