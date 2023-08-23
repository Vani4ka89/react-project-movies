import {createAsyncThunk, createSlice, isFulfilled, isRejectedWithValue} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IError, IGenreBadge, IGenreBadgePagination, IMovie, IPagination} from "../../interfaces";
import {genreService} from "../../services";

interface IState {
    genresList: IGenreBadge[];
    error: IError;
    MoviesOfGenre: IMovie[];
}

const initialState: IState = {
    genresList: [],
    error: null,
    MoviesOfGenre: []
}

const getAll = createAsyncThunk<IGenreBadgePagination<IGenreBadge[]>, void>(
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

const getById = createAsyncThunk<IPagination<IMovie[]>, { genreId: number, page: number }>(
    'genreSlice/getById',
    async ({genreId, page}, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getById(genreId, page);
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