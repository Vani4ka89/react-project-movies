import React, {useEffect} from 'react';
import {NavLink, useParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {moviesActions} from "../../redux";
import css from "./GenreBadge.module.css";

const GenreBadge = () => {

    const dispatch = useAppDispatch();

    const {movie} = useAppSelector(state => state.moviesReducer);
    const {id} = useParams();

    useEffect(() => {
        dispatch(moviesActions.getMovie({id: +id}))
    }, [dispatch, id])

    if (!movie) {
        return
    }
    const {genres} = movie;

    return (
        <div>
            {genres.map(genre => (
                <NavLink className={css.link} to={`#`} key={genre.id}>{genre.name}</NavLink>
            ))}
        </div>
    );
};

export default GenreBadge;