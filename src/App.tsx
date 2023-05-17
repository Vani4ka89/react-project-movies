import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MoviesPage, GenresPage, HomePage} from "./pages";
import {MoviesInfoPage} from "./pages/MoviesInfoPage/MoviesInfoPage";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'movies'} element={<MoviesPage/>}>
                    <Route path={':id'} element={<MoviesInfoPage/>}/>
                </Route>
                <Route path={'genres'} element={<GenresPage/>}/>
            </Route>
        </Routes>
    );
};

export default App;