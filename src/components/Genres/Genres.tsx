import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {Genre} from "../Genre/Genre";
import {genresActions} from "../../redux";
import css from './Genres.module.css';

const Genres:FC = () => {

    const {genresList} = useAppSelector(state => state.genresReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(genresActions.getAll())
    }, [dispatch])

    return (
        <div className={css.wrap}>
            {genresList.map(genre => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {Genres};