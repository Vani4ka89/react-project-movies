import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

import {IGenre} from "../../interfaces";
import css from './Genre.module.css';

interface IProps {
    genre: IGenre;
}

const Genre: FC<IProps> = ({genre}) => {
    const {id, name} = genre

    return (
        <div className={css.box}>
            <div>
                <NavLink className={css.link} to={id.toString()}>{name}</NavLink>
            </div>
            <hr/>
        </div>
    );
};

export {Genre};