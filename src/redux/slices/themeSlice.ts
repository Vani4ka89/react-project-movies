import {createSlice} from "@reduxjs/toolkit";

interface IState {
    lightTheme: boolean;
}

const initialState: IState = {
    lightTheme: false
};

const slice = createSlice({
    name: 'themeSlice',
    initialState,
    reducers: {
        themeToggle: state => {
            state.lightTheme = !state.lightTheme;
        },
    }
});

const {reducer: themeReducer, actions} = slice;

const themeActions = {
    ...actions
}

export {
    themeActions,
    themeReducer
}