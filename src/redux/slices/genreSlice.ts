import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IGenre} from "../../interfaces";
import {genreService} from "../../services/genre.service";

interface IState {
    genres: IGenre[];
}

const initialState: IState = {
    genres: []
}

const getGenres = createAsyncThunk<IGenre[], void>(
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