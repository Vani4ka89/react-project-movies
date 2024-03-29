import React, {useEffect} from 'react';
import {Video} from "../Video/Video";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {moviesActions} from "../../redux";

const Videos = () => {
    const {movieId} = useParams<{ movieId: string }>();
    const {movieVideos} = useAppSelector(state => state.moviesReducer);
    const dispatch = useAppDispatch();

    const trailers = movieVideos.filter(trailer => trailer.type === 'Trailer');

    useEffect(() => {
        dispatch(moviesActions.getVideo({movie_id: +movieId}))
    }, [dispatch, movieId]);

    return (
        <div>
            {trailers.map(trailer => <Video key={trailer.id} trailer={trailer}/>)}
            {/*{<Video key={trailers[0].id} video={trailers[0]}/>}*/}
        </div>
    );
};

export {Videos};