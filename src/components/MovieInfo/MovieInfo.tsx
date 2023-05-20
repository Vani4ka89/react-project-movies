import React, {useEffect} from 'react';
import Rating from "@mui/material/Rating";

import {moviesActions} from "../../redux";
import {useAppDispatch, useAppLocation, useAppSelector} from "../../hooks";
import css from './MoviesInfo.module.css';
import {IMovie} from "../../interfaces";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";

const MovieInfo = () => {

    /*const dispatch = useAppDispatch();
    const {genreOfMovie, movie} = useAppSelector(state => state.moviesReducer);
    const {id} = useParams();
    useEffect(() => {
       const showMovie = async (id:number)=> await dispatch(moviesActions.getMovie({id: +id}))
    showMovie(+id)
    }, [dispatch, id])
    console.log(id);
    if(!movie) {
        return
    }
    const { poster_path, title, original_title, vote_average, overview} = movie;
*/
    // const {movie} = useAppSelector(state => state.moviesReducer);


    /*const {id} = useParams();
    const getMovieInfo = async (id:number) => {
        await useAppDispatch(moviesActions.getMovie({id: +id}))
    }
        getMovieInfo(+id)*/


    return (
        <div className={css.infoBox}>
            {/*<div>
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
            </div>*/}
        </div>
    );
};

export {MovieInfo};