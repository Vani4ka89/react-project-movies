import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {movieReducer, genreReducer} from "./slices";

const rootReducer = combineReducers({
    movieReducer,
    genreReducer
})

const setupStore = () => configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export {
    setupStore
}