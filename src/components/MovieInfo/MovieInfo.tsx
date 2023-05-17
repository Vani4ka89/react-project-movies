import React from 'react';
import {useLocation} from "react-router-dom";

const MovieInfo = () => {

    const location = useLocation();
    console.log(location);

    return (
        <div>
            MovieInfo
        </div>
    );
};

export {MovieInfo};