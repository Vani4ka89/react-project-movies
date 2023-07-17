import React from 'react';
import {NavLink} from "react-router-dom";

import css from './Header.module.css';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {moviesActions} from "../../redux";

const Header = () => {

    const dispatch = useAppDispatch();
    const {searchTerm} = useAppSelector(state => state.moviesReducer);

    const movieSearch = async (e: any) => {
        e.preventDefault();
        await Promise.all([
            dispatch(moviesActions.setSearchTerm(e.target.value)),
            dispatch(moviesActions.search({searchTerm}))
        ])
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary"
             style={{position: 'static', top: '0', zIndex: '9', width: '100%', backgroundColor: 'darkslategray'}}>
            <div className="container-fluid">
                <NavLink className="navbar-brand" to={'home'} style={{color: 'white'}}></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to={'movies'}
                                     style={{color: 'white'}}>Movies</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={'genres'} style={{color: 'white'}}>Genres</NavLink>
                        </li>
                    </ul>
                    <div className={css.logo}>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdxOqXuRWoYenOK3CKWtqYmth9K_EaQ5FmoA&usqp=CAU"
                            alt="logo"/>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search"
                                   style={{color: "darkgreen", fontWeight: "bolder"}}
                                   aria-label="Search" value={searchTerm}
                                   onChange={movieSearch}/>
                            {/*<button className="btn btn-outline-success" type="submit" onClick={movieSearch}>Search*/}
                            {/*</button>*/}
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export {Header};