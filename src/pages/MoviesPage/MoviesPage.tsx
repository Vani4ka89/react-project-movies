import React from 'react';

import {MoviesList} from "../../components";
import css from './MoviesPage.module.css'


const MoviesPage = () => {
    return (
        <div className={css.wrap}>
            <MoviesList/>
        </div>
    );
};

export {MoviesPage};