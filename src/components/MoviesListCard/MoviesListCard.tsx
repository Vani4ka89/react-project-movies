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
        backdrop_path, id, overview, title, release_date, vote_average
    } = movie

    return (
        <div>
            <div className={css.card}>
                <img src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} onClick={() => info.current.click()}
                     alt=""/>
                <div className={css.cardContent}>
                    <div className={css.additionalData}>
                        <Rating name="read-only" defaultValue={vote_average} readOnly max={10} precision={0.5}
                                size='small'/>
                        <div className="text-body-secondary">{release_date?.substring(0, 4)}</div>
                    </div>
                    <h5>{title}</h5>
                    <div className="card-body">
                        <p className="card-text">{overview}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" style={{display: 'none'}}
                                        className="btn btn-sm btn-outline-secondary"
                                        onClick={() => navigate(`${id}`, {state: {...movie}})} ref={info}>More Info
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {MoviesListCard};