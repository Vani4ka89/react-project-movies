import React, {useEffect} from 'react';
import Rating from "@mui/material/Rating";
import {NavLink, useParams} from "react-router-dom";

import {moviesActions} from "../../redux";
import {useAppDispatch, useAppSelector} from "../../hooks";
import css from './MoviesInfo.module.css';

const MovieInfo = () => {
    const dispatch = useAppDispatch();

    const {movie} = useAppSelector(state => state.moviesReducer);
    const {id} = useParams();

    useEffect(() => {
        dispatch(moviesActions.getMovie({id: +id}))
    }, [dispatch, id])

    if (!movie) {
        return
    }
    const {poster_path, genres, title, original_title, overview, vote_average} = movie;

    return (
        <div className={css.infoBox}>
            <div>
                <p></p>
                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title}/>
            </div>
            <div className={css.content}>
                <h1>{original_title}</h1>
                <div>
                    {genres.map(genre => (
                        <NavLink className={css.link} to={`genre/${genre.id}`} key={genre.id}>{genre.name}</NavLink>
                    ))}
                </div>
                <p>Rating</p>
                <div>
                    <Rating name="read-only" defaultValue={vote_average} readOnly max={10} precision={0.1}
                            size='large'/>
                </div>
                <p>Overview</p>
                <h5>{overview}</h5>
            </div>
        </div>
    );
};

export {MovieInfo};