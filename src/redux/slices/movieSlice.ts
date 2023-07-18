import {AxiosError} from "axios";
import {createAsyncThunk, createSlice, isFulfilled, isRejectedWithValue} from "@reduxjs/toolkit";

import {IError, IGenre, IMovie, IMovieList} from "../../interfaces";
import {movieService} from "../../services";

interface IState {
    movie: IMovie;
    movies: IMovie[];
    genresOfMovie: IGenre[];
    page: number;
    error: IError;
    moviesOfGenre: IMovie[];
    searchedMovies: IMovie[],
    searchTerm: string | number,
}

const initialState: IState = {
    movie: null,
    movies: [],
    genresOfMovie: null,
    page: null,
    error: null,
    moviesOfGenre: null,
    searchedMovies: null,
    searchTerm: null,
}

const getAll = createAsyncThunk<IMovieList<IMovie[]>, { page: number }>(
    'movieSlice/getAll',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(page);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const getById = createAsyncThunk<IMovie, { id: string }>(
    'movieSlice/getById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data: movie} = await movieService.getById(id);
            return movie
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const getAllOfGenre = createAsyncThunk<IMovieList<IMovie[]>, { id: number }>(
    'movieSlice/getAllOfGenre',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAllOfGenre(id);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const search = createAsyncThunk<IMovieList<IMovie[]>, { searchTerm: string | number }>(
    'movieSlice/search',
    async ({searchTerm}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.search(searchTerm);
            return data
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data)
        }
    }
)


const slice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {page, results} = action.payload
                state.movies = results
                state.page = page
            })

            .addCase(getById.fulfilled, (state, action) => {
                state.movie = action.payload
                const {genres} = action.payload
                state.genresOfMovie = genres
            })

            .addCase(getAllOfGenre.fulfilled, (state, action) => {
                const {results} = action.payload
                state.moviesOfGenre = results
            })

            .addCase(search.fulfilled, (state, action) => {
                const {results} = action.payload
                state.searchedMovies = results
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
    getAll,
    getById,
    getAllOfGenre,
    search
}

export {
    moviesReducer,
    moviesActions
}