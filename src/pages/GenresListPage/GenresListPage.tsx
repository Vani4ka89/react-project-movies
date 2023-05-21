import React from 'react';

import {Genres} from "../../components";
import css from './GenresListPage.module.css';

const GenresListPage = () => {
    return (
        <div className={css.wrap}>
            <Genres/>
        </div>
    );
};

export {GenresListPage};