import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import Rating from "@mui/material/Rating";

import {movieActions} from "../../redux";
import {useAppDispatch, useAppSelector} from "../../hooks";
import css from './MoviesInfo.module.css';

const MovieInfo = () => {

    const dispatch = useAppDispatch();
    const [query] = useSearchParams();
    const {movie} = useAppSelector(state => state.movieReducer);

    useEffect(() => {
        dispatch(movieActions.getMovie({id: +query.get('id')}))
    }, [dispatch, query])

    if (!movie) {
        return
    }

    const {original_title, title, genres, vote_average, overview, poster_path} = movie;
    console.log(genres);
    genres.map(genre => console.log(genre.name))
    return (
        <div className={css.infoBox}>
            <div>
                <p></p>
                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title}/>
            </div>
            <div className={css.content}>
                <h1>{original_title}</h1>
                <div>
                    {genres.map(genre => <span key={genre.id}>{genre.name}</span>)}
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