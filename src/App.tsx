import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MoviesPage, GenresPage, HomePage} from "./pages";

import 'bootstrap/dist/css/bootstrap.min.css';
import {MovieInfo} from "./components/MovieInfo/MovieInfo";


const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'movies'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'movies'} element={<MoviesPage/>}/>
                <Route path={'info'} element={<MovieInfo/>}/>
                <Route path={'genres'} element={<GenresPage/>}/>
            </Route>
        </Routes>
    );
};

export default App;