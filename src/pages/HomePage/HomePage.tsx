import React from 'react';

import css from './HomePage.module.css';

const HomePage = () => {
    const handleClick = () => {
        window.location.href = 'movies'
    }
    return (
        <div className={css.block}>
            <div className={css.btn}>
                <button onClick={handleClick}>Watch Movies</button>
            </div>
        </div>
    );
};

export {HomePage};