import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {Badge} from "../Badge/Badge";
import {genresActions} from "../../redux";
import '../../styles/components/GenresBadgesList.css';

const GenresBadgesList: FC = () => {

    const {genresList} = useAppSelector(state => state.genresReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(genresActions.getAll());
    }, [dispatch]);

    return (
        <div className={'container'}>
            {genresList.map(badge => <Badge key={badge.id} badge={badge}/>)};
        </div>
    );
};

export {GenresBadgesList};