import React, {useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {moviesActions} from "../../redux";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {useSearchParams} from "react-router-dom";
import '../../styles/components/MoviesFound.css';

const MoviesFound = () => {
    const {searchTerm, searchedMovies} = useAppSelector(state => state.moviesReducer);
    const dispatch = useAppDispatch();
    const [query,] = useSearchParams();

    useEffect(() => {
        const currentPage = +query.get('page') ? +query.get('page') : 1;
        dispatch(moviesActions.search({searchTerm, page: currentPage}));
    }, [dispatch, searchTerm, query]);

    return (
        <div className={'moviesContainer'}>
            {searchedMovies && searchedMovies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MoviesFound};