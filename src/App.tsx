import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MoviesPage, GenresListPage} from "./pages";

import 'bootstrap/dist/css/bootstrap.min.css';
import {GenrePage} from "./pages/GenrePage/GenrePage";
import {MovieInfo} from "./components";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'movies'}/>}/>
                <Route path={'/movies'} element={<MoviesPage/>}/>
                <Route path={'/movies/:id'} element={<MovieInfo/>}/>
                <Route path={'/genres'} element={<GenresListPage/>}/>
                <Route path={'/movies/genre/:id'} element={<GenrePage/>}/>
            </Route>
        </Routes>
    );
};

export default App;