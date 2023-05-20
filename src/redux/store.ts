import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {moviesReducer, genresReducer} from "./slices";

const rootReducer = combineReducers({
    moviesReducer,
    genresReducer
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