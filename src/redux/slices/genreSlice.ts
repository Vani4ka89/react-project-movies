import {createAsyncThunk, createSlice, isFulfilled, isRejectedWithValue} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IError, IGenre, IPaginateGenre} from "../../interfaces";
import {genreService} from "../../services";

interface IState {
    genres: IGenre[];
    error: IError;
}

const initialState: IState = {
    genres: [],
    error: null
}

const getGenres = createAsyncThunk<IPaginateGenre<IGenre[]>, void>(
    'genreSlice/getGenres',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getGenres();
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
            .addCase(getGenres.fulfilled, (state, action) => {
                const {genres} = action.payload
                state.genres = genres
            })

            .addMatcher(isFulfilled(), state => {
                state.error = null
            })

            .addMatcher(isRejectedWithValue(), (state, action) => {
                state.error = action.payload
            })
});

const {reducer: genreReducer, actions} = slice;

const genreActions = {
    ...actions,
    getGenres
}

export {
    genreReducer,
    genreActions
}