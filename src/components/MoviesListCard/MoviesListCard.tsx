import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";
import Rating from "@mui/material/Rating";

import {IMovie} from "../../interfaces";
import css from './MoviesListCard.module.css';
import {posterBaseUrl} from "../../constants";

interface IProps {
    movie: IMovie;
}

const MoviesListCard: FC<IProps> = ({movie}) => {
    const {
        backdrop_path, id, title, release_date, vote_average
    } = movie;
    const navigate = useNavigate();

    const imgPath = backdrop_path ? `${posterBaseUrl}${backdrop_path}` : '';

    return (
        <div key={id}>
            {backdrop_path && <div className={css.card} onClick={() => navigate(`/movies/${id}`, {state: {...movie}})}>
                <img src={imgPath} alt={title}/>
                <div className={css.cardContent}>
                    <h5>{title}</h5>
                    <div className={css.additionalData}>
                        <Rating name="read-only" defaultValue={vote_average} readOnly max={10} precision={0.5}
                                size='small'/>
                        <div className={`text-body-secondary ${css.year}`}>{release_date?.substring(0, 4)}</div>
                    </div>
                </div>
            </div>}
        </div>
    );
};

export {MoviesListCard};