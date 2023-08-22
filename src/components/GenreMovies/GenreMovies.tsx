import React, {FC} from 'react';
import Rating from "@mui/material/Rating";

import {IMovie} from "../../interfaces";
import css from './GenreMovies.module.css';
import {useNavigate} from "react-router-dom";
import {posterBaseUrl} from "../../constants";

interface IProps {
    movies: IMovie;
}

const GenreMovies: FC<IProps> = ({movies}) => {
    const navigate = useNavigate();

    const {id, backdrop_path, title, vote_average, release_date, overview} = movies;
    const imgPath = backdrop_path ? `${posterBaseUrl}${backdrop_path}` : '#';

    return (
        <div key={id} onClick={() => navigate(`/movies/${id}`, {state: {...movies}})}>
            <div className={css.cards}>
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

export default GenreMovies;