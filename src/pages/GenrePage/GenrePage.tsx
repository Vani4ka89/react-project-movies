import React, {useEffect} from 'react';

import css from './GenrePage.module.css';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {useParams, useSearchParams} from "react-router-dom";
import {genresActions, moviesActions} from "../../redux";
import GenreMovies from "../../components/GenreMovies/GenreMovies";
import {MoviesPagination} from "../../components";

const GenrePage = () => {

    const {id} = useParams();
    const dispatch = useAppDispatch();
    const [query,_] = useSearchParams();

    const {MoviesOfGenre} = useAppSelector(state => state.genresReducer);


    useEffect(() => {
        const currentPage = +query.get('page') ? +query.get('page') : 1;
        dispatch(genresActions.getById({id: +id, page: currentPage}))
    }, [dispatch, id, query])

    if (!MoviesOfGenre) {
        return
    }

    return (
        <div className={css.box}>
            {MoviesOfGenre.map(movies=><GenreMovies key={movies.id} movies={movies}/>)};
            <MoviesPagination/>
        </div>
    );
};

export {GenrePage};