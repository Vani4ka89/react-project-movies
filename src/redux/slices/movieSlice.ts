import {AxiosError} from "axios";
import {createAsyncThunk, createSlice, isFulfilled, isRejectedWithValue} from "@reduxjs/toolkit";

import {IError, IGenre, IMovie, IMovieList} from "../../interfaces";
import {movieService} from "../../services";

interface IState {
    movie: IMovie;
    movies: IMovie[];
    genreOfMovie: IGenre[];
    page: number;
    error: IError;
    moviesOfGenre: IMovie[];
}

const initialState: IState = {
    movie: null,
    movies: [],
    genreOfMovie: null,
    page: null,
    error: null,
    moviesOfGenre: null
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

const getMovies = createAsyncThunk<IMovieList<IMovie[]>, { page: number }>(
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

const getMoviesOfGenre = createAsyncThunk<IMovieList<IMovie[]>, { id: number }>(
    'movieSlice/getMoviesOfGenre',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getMoviesOfGenre(id);
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
                const {genres} = action.payload
                state.genreOfMovie = genres
                state.movie = action.payload
            })

            .addCase(getMovies.fulfilled, (state, action) => {
                const {page, results} = action.payload
                state.movies = results
                state.page = page
            })

            .addCase(getMoviesOfGenre.fulfilled, (state, action) => {
                const {results} = action.payload
                state.moviesOfGenre = results
            })

            .addMatcher(isFulfilled(), state => {
                state.error = null
            })

            .addMatcher(isRejectedWithValue(), (state, action) => {
                state.error = action.payload
            })

});

const {reducer: moviesReducer, actions} = slice;

const moviesActions = {
    ...actions,
    getMovie,
    getMovies,
    getMoviesOfGenre
}

export {
    moviesReducer,
    moviesActions
}