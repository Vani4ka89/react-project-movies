import React, {FC} from 'react';
import {IMovie} from "../../interfaces";


interface IProps {
    movie: IMovie
}

const SearchedMovies: FC<IProps> = ({movie}) => {
    const {id, title, backdrop_path} = movie;
    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>backdrop_path: {backdrop_path}</div>
        </div>
    );
};

export {SearchedMovies};