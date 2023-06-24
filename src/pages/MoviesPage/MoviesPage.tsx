import React from 'react';

import {MoviesList, MoviesPagination} from "../../components";
import css from './MoviesPage.module.css'
import {Search} from "../../components/Search/Search";


const MoviesPage = () => {
    return (
        <div className={css.wrap}>
            <MoviesPagination/>
            <Search/>
            <MoviesList/>
        </div>
    );
};

export {MoviesPage};