import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import Rating from "@mui/material/Rating";

import {moviesActions} from "../../redux";
import {useAppDispatch, useAppLocation} from "../../hooks";
import {GenreBadge} from "../GenreBadge/GenreBadge";
import {IMovie} from "../../interfaces";
import '../../styles/components/MovieInfo.css';
import {posterBaseUrl} from "../../constants";

const MovieInfo = () => {
    const {movieId} = useParams<{ movieId: string }>();
    const {state: movie} = useAppLocation<IMovie>();
    const dispatch = useAppDispatch();
    let navigate = useNavigate();

    useEffect(() => {
        if (movieId) {
            dispatch(moviesActions.getById({movieId}))
        }
    }, [dispatch, movieId])

    if (!movie) {
        return
    }
    const {poster_path, title, original_title, overview, vote_average} = movie;

    const getMovieVideos = () => {
        navigate(`/movies/${movieId}/video`);
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    // const starConfig = {
    //     size: 18,
    //     activeColor: '#c00e0e',
    //     color: '#ffffff',
    //     edit: false,
    // };

    return (
        <div className={'main-container'}>
            <div>
                <img src={`${posterBaseUrl}${poster_path}`} alt={title}/>
            </div>
            <div className={'content'}>
                <h1>{original_title}</h1>
                <GenreBadge/>
                <p>Rating</p>
                <div>
                    <Rating
                        name="read-only"
                        defaultValue={vote_average}
                        readOnly max={10}
                        precision={0.1}
                        size='large'
                    />
                </div>
                <p>Overview</p>
                <h5>{overview}</h5>
                <button className={'btn-play'} onClick={getMovieVideos}>PLAY</button>
            </div>
        </div>
    );
};

export {MovieInfo};