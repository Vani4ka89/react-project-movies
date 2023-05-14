import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {HomePage} from "./pages";
import 'bootstrap/dist/css/bootstrap.min.css';
import {MoviesPage} from "./pages/MoviesPage/MoviesPage";


const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'movies'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'movies'} element={<MoviesPage/>}/>
            </Route>
        </Routes>
    );
};

export default App;