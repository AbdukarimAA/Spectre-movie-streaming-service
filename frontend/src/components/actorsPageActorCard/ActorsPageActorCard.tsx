import React from 'react';
import './ActorsPageActorCard.scss';
import {Link} from "react-router-dom";

export const ActorsPageActorCard = ({actor}: any) => {
    return (
        <div className='actors-page-actor-card'>
            {
                <Link to={`/actor/${actor._id}`} className='link'>
                    <div className="actors-page-actor-card-container">
                        <img src={actor.img} alt="img"/>
                        <div className="actors-page-actor-card-container-name">
                            <span className='actors-page-actor-card-container-main-span'>Name</span>
                            <span>{actor.nameEng}</span>
                        </div>
                        <div className="actors-page-actor-card-container-name">
                            <span className='actors-page-actor-card-container-main-span'>Total number of movies</span>
                            <span>{actor.totalMovies}</span>
                        </div>
                    </div>
                </Link>
            }
        </div>
    );
};