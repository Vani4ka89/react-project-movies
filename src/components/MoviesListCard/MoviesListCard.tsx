import React, {FC} from 'react';
import Rating from "@mui/material/Rating";
import {useNavigate} from "react-router-dom";

import {IMovie} from "../../interfaces";
import css from './MoviesListCard.module.css';

interface IProps {
    movie: IMovie;
}

const MoviesListCard: FC<IProps> = ({movie}) => {
    const {
        backdrop_path, id, overview, title, release_date, vote_average
    } = movie

    const imgPath = backdrop_path ? `https://image.tmdb.org/t/p/w500/${backdrop_path}` : '#';

    const navigate = useNavigate();

    return (
        <div>
            <div className={css.card} onClick={() => navigate(`${id}`, {state: {...movie}})}>
                <img src={imgPath} alt={title}/>
                <div className={css.cardContent}>
                    <div className={css.additionalData}>
                        <Rating name="read-only" defaultValue={vote_average} readOnly max={10} precision={0.5}
                                size='small'/>
                        <div className="text-body-secondary">{release_date?.substring(0, 4)}</div>
                    </div>
                    <h5>{title}</h5>
                    <div className="card-body">
                        <p className="card-text">{overview}</p>
                        <div className="d-flex justify-content-between align-items-center"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {MoviesListCard};