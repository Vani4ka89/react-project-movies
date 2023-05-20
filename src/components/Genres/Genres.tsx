import React, {useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {Genre} from "../Genre/Genre";
import {genresActions} from "../../redux";
import css from './Genres.module.css';

const Genres = () => {

    const {genres} = useAppSelector(state => state.genresReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(genresActions.getGenres())
    }, [dispatch])

    return (
        <div className={css.wrap}>
            {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {Genres};