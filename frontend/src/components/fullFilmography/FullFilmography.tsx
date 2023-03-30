import React from 'react';
import './FullFilmography.scss';

const FullFilmography = ({film}) => {
    return (
        <div className='full-filmography'>
            <div className="full-filmography-container">
                <div className="full-filmography-container-img">
                    <img src="https://www.film.ru/sites/default/files/movies/posters/49628551-2323440.jpg" alt=""/>
                </div>
                <div className="full-filmography-container-titles">
                    <span className='full-filmography-container-titles-white'>2023</span>
                    <span className='full-filmography-container-titles-white'>The last of us</span>
                    <span className='full-filmography-container-titles-grey'>Rating: 9,8</span>
                </div>
                <div className="full-filmography-container-button">
                    <button>Watch</button>
                </div>
            </div>
        </div>
    );
};

export default FullFilmography;