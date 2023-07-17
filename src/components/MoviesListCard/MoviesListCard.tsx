import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";
import Rating from "@mui/material/Rating";

import {IMovie} from "../../interfaces";
import css from './MoviesListCard.module.css';

interface IProps {
    movie: IMovie;
}

const MoviesListCard: FC<IProps> = ({movie}) => {
    const {
        backdrop_path, id, title, release_date, vote_average
    } = movie
    const navigate = useNavigate();

    const imgPath = backdrop_path ? `https://image.tmdb.org/t/p/w500/${backdrop_path}` : '#';

    return (
        <div key={id}>
            {backdrop_path && <div className={css.card} onClick={() => navigate(`${id}`, {state: {...movie}})}>
                <img src={imgPath} alt={title}/>
                <div className={css.cardContent}>
                    <h5>{title}</h5>
                    <div className={css.additionalData}>
                        <Rating name="read-only" defaultValue={vote_average} readOnly max={10} precision={0.5}
                                size='small'/>
                        <div className="text-body-secondary">{release_date?.substring(0, 4)}</div>
                    </div>
                    {/*<div className="card-body">*/}
                    {/*    <p className="card-text">{overview}</p>*/}
                    {/*    <div className="d-flex justify-content-between align-items-center"></div>*/}
                    {/*</div>*/}
                </div>
            </div>}
        </div>
    );
};

export {MoviesListCard};