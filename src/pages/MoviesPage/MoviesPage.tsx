import React from 'react';

import {Genres, MoviesList, MoviesPagination} from "../../components";
import css from './MoviesPage.module.css'


const MoviesPage = () => {
    return (
        <div className={css.wrap}>
            <Genres/>
            <MoviesList/>
            <MoviesPagination/>
        </div>
    );
};

export {MoviesPage};