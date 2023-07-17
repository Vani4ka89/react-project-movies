import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

import {IGenre} from "../../interfaces";
import '../../styles/components/Genre.css';

interface IProps {
    genre: IGenre;
}

const Genre: FC<IProps> = ({genre}) => {
    const {id, name} = genre

    return (
        <div className={'box'}>
            <div>
                <NavLink className={'link'} to={id.toString()}>{name}</NavLink>
            </div>
            <hr/>
        </div>
    );
};

export {Genre};