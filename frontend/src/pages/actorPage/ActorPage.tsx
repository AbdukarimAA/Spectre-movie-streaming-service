import React from 'react';
import './ActorPage.scss';

const ActorPage = () => {
    return (
        <div className='actor-page'>
            <div className="test">
                <div className="actor-page-linear-left"></div>
                <div className="actor-page-linear-bottom"></div>
                <div className="actor-page-linear-right"></div>
                <div className="actor-page-test">
                    <div className="actor-page-img">
                        <img src="https://i.pinimg.com/originals/3b/9d/8e/3b9d8ed813114e6d9f02dbb2ba7abcca.jpg" alt=""/>
                    </div>
                </div>
            </div>
            <div className="actor-page-info">
                <span>ddddd</span>
            </div>
        </div>
    );
};

export default ActorPage;