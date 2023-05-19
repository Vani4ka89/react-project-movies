import React, {useEffect} from 'react';
import Rating from "@mui/material/Rating";
// import {NavLink} from "react-router-dom";

import {movieActions} from "../../redux";
import {useAppDispatch, useAppLocation} from "../../hooks";
import css from './MoviesInfo.module.css';
import {IMovie} from "../../interfaces";

const MovieInfo = () => {

    const dispatch = useAppDispatch();

    const {state:movie} = useAppLocation<IMovie>();
    const {id,genre_ids, poster_path, title, original_title, vote_average, overview} = movie;


    useEffect(() => {
        dispatch(movieActions.getMovie({id: id}))
    }, [dispatch, id])


    return (
        <div className={css.infoBox}>
            <div>
                <p></p>
                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title}/>
            </div>
            <div className={css.content}>
                <h1>{original_title}</h1>
                <div>

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