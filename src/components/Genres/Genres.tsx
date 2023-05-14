import React, {useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {Genre} from "../Genre/Genre";
import {genreActions} from "../../redux";

const Genres = () => {

    const {genres} = useAppSelector(state => state.genreReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(genreActions.getGenres())
    }, [dispatch])

    return (
        <div>
            {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {Genres};