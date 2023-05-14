import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IPagination} from "../../interfaces";
import {IMovie} from "../../interfaces";
import {movieService} from "../../services";

interface IState {
    movie: IMovie[];
}

const initialState: IState = {
    movie: []
}

const get = createAsyncThunk<IPagination<IMovie[]>, void>(
    'movieSlice/get',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await movieService.get();
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

});

const {reducer: movieReducer, actions} = slice;

const movieActions = {
    ...actions,
    get
}

export {
    movieReducer,
    movieActions
}