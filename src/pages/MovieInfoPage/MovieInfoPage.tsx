import React, {FC} from 'react';

import {MovieInfo} from "../../components";
import css from './MovieInfoPage.module.css';

const MovieInfoPage:FC = () => {
    return (
        <div className={css.containerInfo}>
            <MovieInfo/>
        </div>
    );
};

export {MovieInfoPage};