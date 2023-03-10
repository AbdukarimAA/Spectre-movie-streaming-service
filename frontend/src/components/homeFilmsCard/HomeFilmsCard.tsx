import React from 'react';
import './HomeFilmsCard.scss';

const HomeFilmsCard = ({film}) => {
    return (
        <div className='home-films-card'>
            <div className="h-f-carousel-container">
                <div className="h-f-container">
                    <div className="h-f-img">
                        <img src={film.mainImg} alt=""/>
                        <div className="h-f-texts">
                            <span className="h-f-title">{film.mainTitle}</span>
                            <span className="h-f-price">{film.mainPrice}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeFilmsCard;