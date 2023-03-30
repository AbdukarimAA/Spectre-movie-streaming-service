import React from 'react';
import Slider from 'infinite-react-carousel';
import './ReviewsCardSlider.scss';

const ReviewsCardSlider = ({children, slidesToShow, arrowsScroll, initialSlide, arrowsBlock, centerPadding, duration, shift}) => {
    return (
        <div className='reviews-slider'>
            <div className="reviews-slider-container">
                <Slider
                    slidesToShow={slidesToShow}
                    arrowsScroll={arrowsScroll}
                    initialSlide={initialSlide}
                    arrowsBlock={arrowsBlock}
                    centerPadding={centerPadding}
                    duration={duration}
                    shift={shift}
                >
                    {children}
                </Slider>
            </div>
        </div>
    );
};

export default ReviewsCardSlider;