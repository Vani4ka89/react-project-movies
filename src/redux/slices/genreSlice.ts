import {createAsyncThunk, createSlice, isFulfilled, isRejectedWithValue} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IError, IGenre, IGenreList, IMovie, IMovieList} from "../../interfaces";
import {genreService} from "../../services";

interface IState {
    genresList: IGenre[];
    error: IError;
    MoviesOfGenre: IMovie[];
}

const initialState: IState = {
    genresList: [],
    error: null,
    MoviesOfGenre: null
}

const getAll = createAsyncThunk<IGenreList<IGenre[]>, void>(
    'genreSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data: genres} = await genreService.getAll();
            return genres
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const getById = createAsyncThunk<IMovieList<IMovie[]>, { id: number }>(
    'genreSlice/getById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getById(id);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const slice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {genres} = action.payload
                state.genresList = genres
            })

            .addCase(getById.fulfilled, (state, action) => {
                const {results} = action.payload
                state.MoviesOfGenre = results
            })

            .addMatcher(isFulfilled(), state => {
                state.error = null
            })

            .addMatcher(isRejectedWithValue(), (state, action) => {
                state.error = action.payload
            })
});

const {reducer: genresReducer, actions} = slice;

const genresActions = {
    ...actions,
    getAll,
    getById
}

export {
    genresReducer,
    genresActions
}