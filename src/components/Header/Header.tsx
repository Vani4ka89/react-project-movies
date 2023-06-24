import React from 'react';
import {NavLink} from "react-router-dom";

import css from './Header.module.css';


const Header = () => {

 /*   const [searchTerm, setSearchTerm] = useState('');
    const [movies, setMovies] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await fetch(`https://api.example.com/movies?search=${searchTerm}`);
            const data = await response.json();
            setMovies(data.results);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>

            {movies.length > 0 ? (
                <ul>
                    {movies.map((movie) => (
                        <li key={movie.id}>{movie.title}</li>
                    ))}
                </ul>
            ) : (
                <p>No movies found.</p>
            )}
        </div>
    );
}*/

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
                                   aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export {Header};