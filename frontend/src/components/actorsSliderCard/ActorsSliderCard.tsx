import React from 'react';
import './ActorsSliderCard.scss';


const ActorsSliderCard = ({actor}) => {
    return (
        <div className='actors-slider'>
            <div className="actors-slider-div-container">
                <div className="actors-slider-div">
                    <img className='actors-slider-img' src={actor.actorImg} alt=""/>
                    <div className="div-test">
                        <span className='actors-slider-div-actor-name'>
                            {actor.name}
                        </span>
                        <span className='actors-slider-div-actor-last'>
                            {actor.lastName}
                        </span>
                        <span className='actors-slider-div-role'>
                            {actor.role}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActorsSliderCard;