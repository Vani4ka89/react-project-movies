import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {moviesActions} from "../../redux";
import '../../styles/components/GenreBadge.css';

const GenreBadge = () => {
    const {id} = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const {movie} = useAppSelector(state => state.moviesReducer);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(moviesActions.getById({id}))
    }, [dispatch, id])

    if (!movie) {
        return
    }
    const {genres} = movie;

    return (
        <div>
            {genres.map(genre => (
                <button className={'link'} key={genre.id}
                        onClick={() => navigate(`/movies/genre/${genre.id}`)}>{genre.name}</button>
            ))}
        </div>
    );
};

export {GenreBadge};