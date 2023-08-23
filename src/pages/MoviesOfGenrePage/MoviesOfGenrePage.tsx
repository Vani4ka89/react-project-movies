import React, {FC} from 'react';

import {MoviesOfGenre} from "../../components/MoviesOfGenre/MoviesOfGenre";
import {GenresBadgesList, MoviesPagination} from "../../components";
import css from "./MoviesOfGenrePage.module.css";

const MoviesOfGenrePage: FC = () => {
    return (
        <div className={css.container}>
            <GenresBadgesList/>
            <MoviesOfGenre/>
            <MoviesPagination/>
        </div>
    );
};

export {MoviesOfGenrePage};