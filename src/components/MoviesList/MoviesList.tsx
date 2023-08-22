import React, {FC, useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {moviesActions} from "../../redux";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import '../../styles/components/MoviesList.css'
import {GenrePage} from "../../pages/GenrePage/GenrePage";

const MoviesList: FC = () => {

    const dispatch = useAppDispatch();
    const {MoviesOfGenre} = useAppSelector(state => state.genresReducer);
    const {movies, searchedMovies} = useAppSelector(state => state.moviesReducer);
    const [query] = useSearchParams();

    useEffect(() => {
        const currentPage = +query.get('page') ? +query.get('page') : 1;
        dispatch(moviesActions.getAll({page: currentPage}))
    }, [dispatch, query])

    return (
        <div className={'moviesList'}>
            {/*{MoviesOfGenre && MoviesOfGenre.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}*/}
            {
                searchedMovies &&
            searchedMovies.length > 0 ? searchedMovies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)
                :
                movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)
            }
        </div>
    );
};

export {MoviesList};