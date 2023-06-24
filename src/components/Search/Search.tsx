import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {moviesActions} from "../../redux";
// import {SearchedMovies} from "../searchedMovies/SearchedMovies";

const Search: FC = () => {
    const dispatch = useAppDispatch();
    const {searchTerm} = useAppSelector(state => state.moviesReducer);

    useEffect(() => {
        dispatch(moviesActions.search({searchTerm}))
    }, []);

    return (
        <div>
            {/*{*/}
            {/*    searchedMovies.map(movie => <SearchedMovies key={movie.id} movie={movie}/>)*/}
            {/*}*/}
            <div>
                <input
                    style={{outline: "none", borderRadius: "10px"}}
                    type="text"
                    placeholder={"Search"}
                    value={searchTerm}
                    onChange={(e) => dispatch(moviesActions.setSearchTerm(e.target.value))}
                />
                <button
                    style={{
                        marginLeft: "5px", borderRadius: "12px", width: "50px"
                    }}>
                    OK
                </button>
            </div>
        </div>
    );
};

export {Search};