import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";

import {IGenre} from "../../interfaces";
import '../../styles/components/Genre.css';

interface IProps {
    badge: IGenre;
}

const Badge: FC<IProps> = ({badge}) => {
    const {id, name} = badge
    const navigate = useNavigate();

    const getGenreMovies = () => {
        navigate(`/movies/genre/${id}`)
    }

    return (
        <div className={'box'} onClick={getGenreMovies}>
            <div>
                <button className={'link'}>{name}</button>
            </div>
            <hr/>
        </div>
    );
};

export {Badge};