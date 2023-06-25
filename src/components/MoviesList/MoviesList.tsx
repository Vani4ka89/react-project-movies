import React, {FC, useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {moviesActions} from "../../redux";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import css from './MoviesList.module.css'

const MoviesList: FC = () => {

    const dispatch = useAppDispatch();
    const {movies, searchedMovies} = useAppSelector(state => state.moviesReducer);
    const [query] = useSearchParams();

    useEffect(() => {
        const currentPage = +query.get('page') ? +query.get('page') : 1;
        dispatch(moviesActions.getAll({page: currentPage}))
    }, [dispatch, query])

    return (
        <div className={css.MoviesList}>
            {searchedMovies &&
            searchedMovies.length > 0 ? searchedMovies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)
                :
                movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)
            }
        </div>
    );
};

export {MoviesList};