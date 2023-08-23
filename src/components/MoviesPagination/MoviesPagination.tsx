import React from 'react';
import {useSearchParams} from "react-router-dom";

// import {useAppSelector} from "../../hooks";
import '../../styles/components/MoviesPagination.css';

const MoviesPagination = () => {

    // const {page} = useAppSelector(state => state.moviesReducer);
    const [query, setQuery] = useSearchParams();

    const currentPage = +query.get('page') ? +query.get('page') : 1;
    // const prevClass = `${page <= 1 ? 'disabled' : ''}`;

    // const pageLink = `/movies?page=`;
    // const currentPageLink = `${pageLink}${currentPage}`;
    // const nextPageLink = `${pageLink}${currentPage + 1}`;
    // const nextChildPageLink = `${pageLink}${currentPage + 2}`;

    const prevPage = (e: ReturnType<typeof Object>) => {
        e.preventDefault();
        if (currentPage <= 1) {
            return
        }
        setQuery(prev => ({...prev, page: currentPage - 1}));
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    const nextPage = (e: ReturnType<typeof Object>) => {
        e.preventDefault();
        setQuery(prev => ({...prev, page: currentPage + 1}));
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    const doubleNextPage = (e: ReturnType<typeof Object>) => {
        e.preventDefault();
        setQuery(prev => ({...prev, page: currentPage + 2}));
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <div className={"container"}>
            <button style={{display: currentPage <= 1 ? "none" : "block"}} onClick={prevPage}>prev</button>
            <button><a className="page-link">{currentPage}</a></button>
            <button><a className="page-link" onClick={nextPage}>{currentPage + 1}</a></button>
            <button><a className="page-link" onClick={doubleNextPage}>{currentPage + 2}</a></button>
            <button onClick={nextPage}>next</button>
        </div>
    );
};

export {MoviesPagination};