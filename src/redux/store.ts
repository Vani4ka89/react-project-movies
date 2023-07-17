import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {moviesReducer, genresReducer, themeReducer} from "./slices";

const rootReducer = combineReducers({
    moviesReducer,
    genresReducer,
    themeReducer
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