import {AxiosError} from "axios";
import {createAsyncThunk, createSlice, isFulfilled, isRejectedWithValue} from "@reduxjs/toolkit";

import {IError, IGenre, IMovie, IMovieList} from "../../interfaces";
import {movieService} from "../../services";

interface IState {
    movie: IMovie;
    aboutMovie: number;
    movies: IMovie[];
    genreOfMovie: IGenre[];
    page: number;
    error: IError;
}

const initialState: IState = {
    movie: null,
    aboutMovie: null,
    movies: [],
    genreOfMovie: null,
    page: 1,
    error: null,
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

const getMovies = createAsyncThunk<IMovieList, IPage>(
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
    reducers: {
        setAboutMovie: (state, action) => {
            state.aboutMovie = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getMovie.fulfilled, (state, action) => {
                const {genres, id} = action.payload
                state.genreOfMovie = genres
                state.movie = action.payload
            })

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

const {reducer: moviesReducer, actions} = slice;

const moviesActions = {
    ...actions,
    getMovie,
    getMovies
}

export {
    moviesReducer,
    moviesActions
}