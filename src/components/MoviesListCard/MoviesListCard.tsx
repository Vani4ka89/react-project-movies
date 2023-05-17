import React, {FC, useRef} from 'react';
import {useNavigate} from "react-router-dom";

import {IMovie} from "../../interfaces";
import css from './MoviesListCard.module.css';
import Rating from "@mui/material/Rating";

interface IProps {
    movie: IMovie;
}

const MoviesListCard: FC<IProps> = ({movie}) => {
    const info = useRef<HTMLInputElement>();
    const navigate = useNavigate();

    const {
        adult, backdrop_path, id, poster_path, original_language,
        original_title, genre_ids, overview, title, popularity,
        video, release_date, vote_count, vote_average
    } = movie

    return (
        <div>
            <div className={css.card}>
                <h5>{title}</h5>
                <img src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} onClick={() => info.current.click()}
                     alt=""/>
                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                <div>{vote_average}</div>
                <div className="card-body">
                    <p className="card-text">{overview}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary"
                                    onClick={() => navigate('info')} ref={info}>More Info
                            </button>
                        </div>
                        <small className="text-body-secondary">{release_date}</small>
                    </div>
                </div>
            </div>


            {/*<img src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt=""/>*/}
            {/*<div>*/}
            {/*    <h3>{original_title}</h3>*/}
            {/*    <div>vote_average: {vote_average}</div>*/}
            {/*    <p>{overview}</p>*/}
            {/*    <div>{release_date}</div>*/}
            {/*</div>*/}
            {/*<div>video: {video}</div>*/}
            {/*<div>adult: {adult}</div>*/}
            {/*<div>{original_language}</div>*/}
            {/*<div>poster_path: {poster_path}</div>*/}
            {/*<div>genre_ids: {genre_ids}</div>*/}
            {/*<div>title: {title}</div>*/}
            {/*<div>popularity: {popularity}</div>*/}
            {/*<div>vote_count: {vote_count}</div>*/}
            {/*<hr/>*/}
        </div>
    );
};

export {MoviesListCard};