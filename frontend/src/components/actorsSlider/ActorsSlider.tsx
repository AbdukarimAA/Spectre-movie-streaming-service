import React from 'react';
import Slider from 'infinite-react-carousel';
import './ActorsSlider.scss';

const ActorsSlider = ({children, slidesToShow, arrowsScroll, initialSlide, arrowsBlock}) => {
    return (
        <div className='actors-slider'>
            <div className="actors-slider-container">
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

export default ActorsSlider;