import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";

import {IGenreBadge} from "../../interfaces";

interface IProps {
    badge: IGenreBadge;
}

const Badge: FC<IProps> = ({badge}) => {
    const {id: genreId, name} = badge;
    const navigate = useNavigate();

    const getGenreMovies = () => {
        navigate(`/movies/genre/${genreId}`)
    }

    return (
        <div className={'btn-box'} onClick={getGenreMovies}>
                <button>{name}</button>
        </div>
    );
};

export {Badge};