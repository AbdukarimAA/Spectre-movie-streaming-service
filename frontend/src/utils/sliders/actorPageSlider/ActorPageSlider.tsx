import React from 'react';
import Slider from 'infinite-react-carousel';
import './ActorPageSlider.scss';

const ActorPageSlider = ({children, slidesToShow, arrowsScroll, initialSlide, arrowsBlock}) => {
    return (
        <div className='actor-page-slider'>
            <div className="actor-page-slider-container">
                <Slider
                    slidesToShow={slidesToShow}
                    arrowsScroll={arrowsScroll}
                    initialSlide={initialSlide}
                    arrowsBlock={arrowsBlock}
                >
                    {children}
                </Slider>
            </div>
        </div>
    );
};

export default ActorPageSlider;