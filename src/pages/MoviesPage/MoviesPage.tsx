import React from 'react';

import {MoviesList, MoviesPagination} from "../../components";
import css from './MoviesPage.module.css'


const MoviesPage = () => {
    return (
        <div className={css.wrap}>
            <MoviesPagination/>
            <MoviesList/>
        </div>
    );
};

export {MoviesPage};