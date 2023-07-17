import React from 'react';
import {Link, useSearchParams} from "react-router-dom";

import {useAppSelector} from "../../hooks";
import '../../styles/components/MoviesPagination.css';

const MoviesPagination = () => {

    const {page} = useAppSelector(state => state.moviesReducer);
    const [query, setQuery] = useSearchParams();

    const currentPage = +query.get('page') ? +query.get('page') : 1;
    const prevClass = `page-item ${page <= 1 ? 'disabled' : ''}`

    const pageLink = `/movies/?page=`;
    const currentPageLink = `${pageLink}${currentPage}`;
    const nextPageLink = `${pageLink}${currentPage + 1}`;
    const nextChildPageLink = `${pageLink}${currentPage + 2}`;


    const prevPage = (e: ReturnType<typeof Object>) => {
        e.preventDefault()
        if (currentPage <= 1) {
            return
        }
        setQuery(prev => ({...prev, page: currentPage - 1}))
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    const nextPage = (e: ReturnType<typeof Object>) => {
        e.preventDefault()
        setQuery(prev => ({...prev, page: currentPage + 1}))
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return (
        <div>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className={prevClass}>
                        <Link className="page-link" to={''} onClick={(e) => prevPage(e)} aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </Link>
                    </li>
                    <li className="page-item"><a className="page-link" href={currentPageLink}>{currentPage}</a></li>
                    <li className="page-item"><a className="page-link" href={nextPageLink}>{currentPage + 1}</a></li>
                    <li className="page-item"><a className="page-link" href={nextChildPageLink}>{currentPage + 2}</a>
                    </li>
                    <li className="page-item">
                        <Link className="page-link" to={''} onClick={(e) => nextPage(e)} aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export {MoviesPagination};