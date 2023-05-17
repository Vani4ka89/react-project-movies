import React, {FC} from 'react';

import {IMovie} from "../../interfaces";

interface IProps {
    movie: IMovie
}

const MovieInfo: FC<IProps> = ({movie}) => {
    const {original_title, vote_average, overview } = movie;

    return (
        <div>
            <div>original_title:{original_title}</div>
            <div>vote_average:{vote_average}</div>
            <div>overview:{overview}</div>
        </div>
    );
};

export {MovieInfo};