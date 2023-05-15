import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import css from './MoviesList.module.css'

const MoviesList = () => {

    const dispatch = useAppDispatch();
    const {movies} = useAppSelector(state => state.movieReducer);
    const [query] = useSearchParams();


    useEffect(() => {
        dispatch(movieActions.getMovies({page: +query.get('page')}))
    }, [dispatch, query])


    return (
        <div className={css.MoviesList}>
            {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MoviesList};