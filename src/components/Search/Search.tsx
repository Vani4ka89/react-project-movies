import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {moviesActions} from "../../redux";
import {SearchedMovies} from "../searchedMovies/SearchedMovies";

const Search: FC = () => {
    const dispatch = useAppDispatch();
    const {searchedMovies, searchTerm} = useAppSelector(state => state.moviesReducer);

    useEffect(() => {
        dispatch(moviesActions.search({searchTerm}))
    }, []);

    return (
        <div>
            {
                searchedMovies.map(movie => <SearchedMovies key={movie.id} movie={movie}/>)
            }
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => dispatch(moviesActions.setSearchTerm(e.target.value))}
            />
        </div>
    );
};

export {Search};