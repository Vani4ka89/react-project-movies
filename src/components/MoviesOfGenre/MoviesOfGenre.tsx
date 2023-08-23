import React, {FC, useEffect} from 'react';
import {useParams, useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {genresActions} from "../../redux";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import '../../styles/components/MoviesOfGenre.css';

const MoviesOfGenre: FC = () => {

    const {genreId} = useParams<{genreId:string}>();
    const dispatch = useAppDispatch();
    const [query, _] = useSearchParams();
    const {MoviesOfGenre} = useAppSelector(state => state.genresReducer);

    useEffect(() => {
        const currentPage = +query.get('page') ? +query.get('page') : 1;
        dispatch(genresActions.getById({genreId: parseInt(genreId), page: currentPage}))
    }, [dispatch, genreId, query]);

    if (!MoviesOfGenre) {
        return <div>Loading...</div>
    }

    return (
        <div className={'moviesContainer'}>
            {MoviesOfGenre.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MoviesOfGenre};