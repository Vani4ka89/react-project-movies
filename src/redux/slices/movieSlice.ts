import {AxiosError} from "axios";
import {createAsyncThunk, createSlice, isFulfilled, isRejectedWithValue} from "@reduxjs/toolkit";

import {IError, IGenreBadge, IMovie, IPagination} from "../../interfaces";
import {movieService} from "../../services";
import {IVideo, IVideoPagination} from "../../interfaces/video.interface";

interface IState {
    movie: IMovie;
    movies: IMovie[];
    genresOfMovie: IGenreBadge[];
    page: number;
    error: IError;
    moviesOfGenre: IMovie[];
    searchedMovies: IMovie[];
    searchTerm: string | number;
    movieVideos: IVideo[];
    videoId: number;
}

const initialState: IState = {
    movie: null,
    movies: [],
    genresOfMovie: [],
    page: null,
    error: null,
    moviesOfGenre: [],
    searchedMovies: [],
    searchTerm: null,
    movieVideos: [],
    videoId: null,
}

const getAll = createAsyncThunk<IPagination<IMovie[]>, { page: number }>(
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

const getById = createAsyncThunk<IMovie, { movieId: string }>(
    'movieSlice/getById',
    async ({movieId}, {rejectWithValue}) => {
        try {
            const {data: movie} = await movieService.getById(movieId);
            return movie
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const getAllOfGenre = createAsyncThunk<IPagination<IMovie[]>, { id: number }>(
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

const search = createAsyncThunk<IPagination<IMovie[]>, { searchTerm: string | number, page: number }>(
    'movieSlice/search',
    async ({searchTerm, page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.search(searchTerm, page);
            return data
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data)
        }
    }
)

const getVideo = createAsyncThunk<IVideoPagination<IVideo[]>, { movieId: number }>(
    'movieSlice/getVideo',
    async ({movieId}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getVideo(movieId);
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

            .addCase(getVideo.fulfilled, (state, action) => {
                const {results, id} = action.payload;
                state.videoId = id;
                state.movieVideos = results;
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
    search,
    getVideo
}

export {
    moviesReducer,
    moviesActions
}