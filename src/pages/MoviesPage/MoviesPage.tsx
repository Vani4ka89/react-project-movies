import React from 'react';

import {MoviesList, MoviesPagination} from "../../components";
import css from './MoviesPage.module.css'
import {Outlet} from "react-router-dom";


const MoviesPage = () => {
    return (
        <div className={css.wrap}>
            <Outlet/>
            <MoviesPagination/>
            <MoviesList/>
        </div>
    );
};

export {MoviesPage};