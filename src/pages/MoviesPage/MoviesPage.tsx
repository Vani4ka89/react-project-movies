import React from 'react';

import {GenresBadgesList, MoviesList, MoviesPagination} from "../../components";
import css from './MoviesPage.module.css'


const MoviesPage = () => {
    return (
        <div className={css.wrap}>
            <GenresBadgesList/>
            <MoviesList/>
            <MoviesPagination/>
        </div>
    );
};

export {MoviesPage};