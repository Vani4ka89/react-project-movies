import React from 'react';

import {MoviesList, MoviesPagination} from "../../components";
import css from './MoviesPage.module.css'
import {GenresListPage} from "../GenresListPage/GenresListPage";


const MoviesPage = () => {
    return (
        <div className={css.wrap}>
            <MoviesList/>
            <MoviesPagination/>
        </div>
    );
};

export {MoviesPage};