import {createSlice} from "@reduxjs/toolkit";

const initialState = {}
const slice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {}
});

const {reducer: movieReducer, actions} = slice;

const movieActions = {
    ...actions
}

export {
    movieReducer,
    movieActions
}