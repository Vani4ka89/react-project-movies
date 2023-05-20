import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MoviesPage, GenresPage, HomePage, AboutMoviePage} from "./pages";

import 'bootstrap/dist/css/bootstrap.min.css';
import {GenrePage} from "./pages/GenrePage/GenrePage";
import {MovieInfo} from "./components";


const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'movies'} element={<MoviesPage/>}/>
                {/*<Route path={'movies/:id'} element={<AboutMoviePage/>}/>*/}
                <Route path={'movies/:id'} element={<MovieInfo/>}/>
                <Route path={'genres'} element={<GenresPage/>}/>
                <Route path={'genres/:id'} element={<GenrePage/>}/>
            </Route>
        </Routes>
    );
};

export default App;