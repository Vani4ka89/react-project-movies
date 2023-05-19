import React, {useEffect} from 'react';
import Rating from "@mui/material/Rating";

import {movieActions} from "../../redux";
import {useAppDispatch, useAppSelector} from "../../hooks";
import css from './MoviesInfo.module.css';
import {NavLink} from "react-router-dom";

const MovieInfo = () => {

    const dispatch = useAppDispatch();

    const {movie} = useAppSelector(state => state.movieReducer);
    const {id, genre_ids, original_title, title, vote_average, overview, poster_path} = movie;


    useEffect(() => {
        dispatch(movieActions.getMovie({id: id}))
    }, [dispatch, id])

    // if (!movie) {
    //     return
    // }


    return (
        <div className={css.infoBox}>
            <div>
                <p></p>
                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title}/>
            </div>
            <div className={css.content}>
                <h1>{original_title}</h1>
                <div>
                    {genre_ids.map(genre_id => <NavLink to={''}>{genre_id}</NavLink>)}
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