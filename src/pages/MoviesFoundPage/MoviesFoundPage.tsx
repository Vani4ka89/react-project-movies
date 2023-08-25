import React from 'react';
import {MoviesFound} from "../../components/MoviesFound/MoviesFound";
import {GenresBadgesList, MoviesPagination} from "../../components";

const MoviesFoundPage = () => {
    return (
        <div>
            <GenresBadgesList/>
            <MoviesFound/>
            <MoviesPagination/>
        </div>
    );
};

export {MoviesFoundPage};