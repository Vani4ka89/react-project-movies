import React from 'react';

import {useAppLocation} from "../../hooks/router.hooks";
import {IMovie} from "../../interfaces";

const MoviesInfoPage = () => {
    const {state} = useAppLocation<IMovie>();
    const {original_title, vote_average, overview} = state
    return (
        <div>
            <div>original_title: {original_title}</div>
            <div>vote_average: {vote_average}</div>
            <div>overview: {overview}</div>
        </div>
    );
};

export {MoviesInfoPage};