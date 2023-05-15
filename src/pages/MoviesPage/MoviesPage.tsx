import React from 'react';

import {MoviesList, MoviesPagination} from "../../components";


const MoviesPage = () => {
    return (
        <div>
            <MoviesPagination/>
            <MoviesList/>
        </div>
    );
};

export {MoviesPage};