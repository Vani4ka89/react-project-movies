import React from 'react';
import {useSearchParams} from "react-router-dom";

import {useAppSelector} from "../../hooks";

const MoviesPagination = () => {

    const {page} = useAppSelector(state => state.movieReducer);
    const [query, setQuery] = useSearchParams();

    const currentPage = +query.get('page');
    const prevClass = `page-item${page <= 1 ? ' disabled' : ''}`

    const pageLink = `/movies/?page=`;
    const currentPageLink = `${pageLink}${currentPage}`;
    const nextPageLink = `${pageLink}${currentPage + 1}`;
    const nextChildPageLink = `${pageLink}${currentPage + 2}`;


    const prev = (e: ReturnType<typeof Object>) => {
        e.preventDefault()
        if (currentPage <= 1) {
            return
        }
        setQuery(prev => ({...prev, page: currentPage - 1}))
    }

    const next = (e: ReturnType<typeof Object>) => {
        e.preventDefault()
        setQuery(prev => ({...prev, page: currentPage + 1}))
    }



    return (
        <div>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className={prevClass}>
                        <a className="page-link" href="#" onClick={(e) => prev(e)} aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li className="page-item"><a className="page-link" href={currentPageLink}>{currentPage}</a></li>
                    <li className="page-item"><a className="page-link" href={nextPageLink}>{currentPage + 1}</a></li>
                    <li className="page-item"><a className="page-link" href={nextChildPageLink}>{currentPage + 2}</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#" onClick={(e) => next(e)} aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export {MoviesPagination};