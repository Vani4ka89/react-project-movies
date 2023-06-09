import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import Rating from "@mui/material/Rating";

import {moviesActions} from "../../redux";
import {useAppDispatch, useAppLocation} from "../../hooks";
import css from './MoviesInfo.module.css';
import GenreBadge from "../GenreBadge/GenreBadge";
import {IMovie} from "../../interfaces";

const MovieInfo = () => {
    const {id} = useParams();
    const {state:movie} = useAppLocation<IMovie>();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(moviesActions.getById({id: +id}))
    }, [dispatch, id])

    if (!movie) {
        return
    }
    const {poster_path, title, original_title, overview, vote_average} = movie;

    return (
        <div className={css.infoBox}>
            <div>
                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title}/>
            </div>
            <div className={css.content}>
                <h1>{original_title}</h1>
                <div>
                    <GenreBadge/>
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