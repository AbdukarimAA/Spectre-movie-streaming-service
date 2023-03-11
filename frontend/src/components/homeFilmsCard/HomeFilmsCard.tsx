import React, {useEffect, useState} from 'react';
import './HomeFilmsCard.scss';

const HomeFilmsCard = ({film}) => {
    const [active, setActive] = useState<boolean>(false);

    return (
        <div className='home-films-card'>
            <div className="h-f-carousel-container">
                <div className="h-f-container">
                    <div className="h-f-img">
                        <div className="h-f-card-div">
                            <img src={film.mainImg} alt=""/>
                            <div className="h-f-card-buttons">
                                <span>tr</span>
                                <span>tr</span>
                                <span>tr</span>
                                <span>tr</span>
                            </div>
                            <div className="h-f-card-ov-info">
                                <span className='h-f-card-rating'>8,5</span>
                                <div className="h-f-card-year-country">
                                    <span className='h-f-card-year'>2012, </span>
                                    <span className='h-f-card-country'> Russia,</span>
                                </div>
                                <span className='h-f-card-duration'>101 min</span>
                            </div>
                        </div>
                        <div className="h-f-texts">
                            <span className="h-f-title">{film.mainTitle}</span>
                            <span className="h-f-price">{film.mainPrice}</span>
                        </div>
                        {/*<div className="h-f-img-active">*/}
                        {/*    <span>ballbal</span>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeFilmsCard;