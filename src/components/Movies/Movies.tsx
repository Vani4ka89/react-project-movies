import React, {useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {Movie} from "../Movie/Movie";
import {movieActions} from "../../redux";

const Movies = () => {

    const dispatch = useAppDispatch();
    const {movies} = useAppSelector(state => state.movieReducer);

    useEffect(() => {
        dispatch(movieActions.getMovies())
    }, [dispatch])

    return (
        <div>
            {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {Movies};