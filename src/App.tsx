import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MoviesPage, MoviesOfGenrePage, MovieInfoPage} from "./pages";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'/movies'}/>}/>
                <Route path={'/movies'} element={<MoviesPage/>}/>
                <Route path={'/movies/:movieId'} element={<MovieInfoPage/>}/>
                <Route path={'/movies/genre/:genreId'} element={<MoviesOfGenrePage/>}/>
            </Route>
        </Routes>
    );
};

export default App;