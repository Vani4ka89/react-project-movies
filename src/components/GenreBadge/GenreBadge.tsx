import React, {useEffect} from 'react';
import {NavLink, useParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {moviesActions} from "../../redux";
import '../../styles/components/GenreBadge.css';

const GenreBadge = () => {
    const {id} = useParams();
    const dispatch = useAppDispatch();
    const {movie} = useAppSelector(state => state.moviesReducer);

    useEffect(() => {
        dispatch(moviesActions.getById({id: +id}))
    }, [dispatch, id])

    if (!movie) {
        return
    }
    const {genres} = movie;

    return (
        <div>
            {genres.map(genre => (
                <NavLink className={'link'} to={''} key={genre.id}>{genre.name}</NavLink>
            ))}
        </div>
    );
};

export default GenreBadge;