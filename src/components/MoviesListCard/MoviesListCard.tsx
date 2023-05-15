import React, {FC} from 'react';

import {IMovie} from "../../interfaces";

interface IProps {
    movie: IMovie;
}

const MoviesListCard: FC<IProps> = ({movie}) => {

    const {
        adult, backdrop_path, poster_path, original_language,
        original_title, genre_ids, overview, title, popularity,
        video, release_date, vote_count, vote_average
    } = movie

    return (
        <div>
            <div>video: {video}</div>
            <div>vote_average: {vote_average}</div>
            <div>adult: {adult}</div>
            <div>backdrop_path: {`https://image.tmdb.org/t/p/w500/${backdrop_path}`}</div>
            <div>original_title: {original_title}</div>
            <div>original_language: {original_language}</div>
            <div>poster_path: {poster_path}</div>
            <div>overview: {overview}</div>
            <div>genre_ids: {genre_ids}</div>
            <div>title: {title}</div>
            <div>popularity: {popularity}</div>
            <div>release_date: {release_date}</div>
            <div>vote_count: {vote_count}</div>
            <hr/>
        </div>
    );
};

export {MoviesListCard};