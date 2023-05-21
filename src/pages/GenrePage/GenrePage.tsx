import React, {useEffect} from 'react';

import css from './GenrePage.module.css';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {useParams} from "react-router-dom";
import {genresActions} from "../../redux";
import GenreMovies from "../../components/GenreMovies/GenreMovies";

const GenrePage = () => {

    const {id} = useParams();
    const dispatch = useAppDispatch();

    const {genreMovies} = useAppSelector(state => state.genresReducer);


    useEffect(() => {
        dispatch(genresActions.getById({id: +id}))
    }, [dispatch, id])

    if (!genreMovies) {
        return
    }



    return (
        <div className={css.box}>
            {genreMovies.map(movies=><GenreMovies key={movies.id} movies={movies}/>)}
        </div>
    );
};

export {GenrePage};