import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MoviesPage, GenresListPage, AboutMoviePage} from "./pages";

import 'bootstrap/dist/css/bootstrap.min.css';
import {GenrePage} from "./pages/GenrePage/GenrePage";


const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'movies'}/>}/>
                <Route path={'movies'} element={<MoviesPage/>}/>
                <Route path={'movies/:id'} element={<AboutMoviePage/>}/>
                <Route path={'genres'} element={<GenresListPage/>}/>
                <Route path={'genres/:id'} element={<GenrePage/>}/>
            </Route>
        </Routes>
    );
};

export default App;