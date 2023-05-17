import React, {useEffect} from 'react';

import {useAppDispatch} from "../../hooks";
import {movieActions} from "../../redux";
import {useAppLocation} from "../../hooks/router.hooks";
import {IMovie} from "../../interfaces";


const MoviesInfoPage = () => {
    const dispatch = useAppDispatch();
    const {state} = useAppLocation<IMovie>();

    const {id} = state;
    console.log(id);


    useEffect(() => {
        dispatch(movieActions.getMovie({id}))
    }, [dispatch, id])

    return (
        <div>
            MoviesInfoPage
        </div>
    );
};

export {MoviesInfoPage};