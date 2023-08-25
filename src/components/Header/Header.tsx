import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {moviesActions, themeActions} from "../../redux";
import '../../styles/components/Header.css';
import sun from '../../assets/images/free-icon-sun-5247953.png';
import moon from '../../assets/images/free-icon-moon-3599494.png';

const Header = () => {

    const dispatch = useAppDispatch();
    const {searchTerm} = useAppSelector(state => state.moviesReducer);
    const {lightTheme} = useAppSelector(state => state.themeReducer);
    const navigate = useNavigate();

    const movieSearch = async (e: any) => {
        e.preventDefault();
        dispatch(moviesActions.setSearchTerm(e.target.value));
        navigate('/movies/search');
    };

    const setTheme = () => {
        dispatch(themeActions.themeToggle())
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary"
             style={{
                 position: 'sticky',
                 top: '0',
                 zIndex: '9',
                 width: '100%',
                 backgroundColor: 'darkslategray',
                 background: 'black',
                 opacity: '0.8'
             }}>
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
                            {/*<NavLink className="nav-link shine" to={''} style={{color: 'white'}}>Home</NavLink>*/}
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active shine" aria-current="page" to={'/movies'}
                                     style={{color: 'white'}}>Movies</NavLink>
                        </li>
                            <img className={'theme-img'} src={lightTheme ? moon : sun} onClick={setTheme}
                                 alt={'theme-logo'}/>
                    </ul>
                    <div className={'logo'}>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdxOqXuRWoYenOK3CKWtqYmth9K_EaQ5FmoA&usqp=CAU"
                            alt="logo"/>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search"
                                   style={{color: "darkgreen", fontWeight: "bolder"}}
                                   aria-label="Search"
                                   value={searchTerm}
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