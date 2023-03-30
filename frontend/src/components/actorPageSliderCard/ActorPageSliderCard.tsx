import React from 'react';
import './ActorPageSliderCard.scss';

const ActorPageSliderCard = ({info}) => {
    return (
        <div className='actor-page-slider-card'>
            <div className="actor-page-slider-card-container">
                <img src={info.img} alt=""/>
                <span>{info.actorSliderTitle}</span>
                <span className='actor-page-slider-card-container-desc'>{info.actorSliderDesc}</span>
                <div className="actor-page-slider-card-container-button">
                    <button className='actor-page-slider-card-container-button-add'>Add to favorites</button>
                    <button>Watch later</button>
                </div>
            </div>
        </div>
    );
};

export default ActorPageSliderCard;