import React from 'react';
import './MovieSearch.scss';
import {Link} from "react-router-dom";

const MovieSearch = ({movie}: any) => {
    return (
        <div className='movie-search'>
            {<Link to={`/film/${movie._id}`} className='link'>
                <div className="movie-search-container">
                    <img src={movie.posterImg} alt=""/>
                    <div className="movie-search-container-info">
                        <span>{movie.title}</span>
                        <span>{movie.year}</span>
                        <span>{movie.rating}</span>
                    </div>
                </div>
            </Link>}
        </div>
    );
};

export default MovieSearch;