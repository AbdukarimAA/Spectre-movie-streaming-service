import React from 'react';
import './ActorPageReviewCard.scss';

const ActorPageReviewCard = () => {
    return (
        <div className="actor-page-reviews">
            <div className="actor-page-reviews-container">
                <div className="actor-page-reviews-container-leaved">
                    <div className="actor-page-reviews-container-leaved-top">
                        <span className='actor-page-reviews-container-leaved-top-username'>User1</span>
                        <span className='actor-page-reviews-container-leaved-top-date'>30.09.2022</span>
                    </div>
                    <div className="actor-page-reviews-container-leaved-bottom">
                        <span>This is an amazing actor</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActorPageReviewCard;