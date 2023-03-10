import React from 'react';
import Slider from 'infinite-react-carousel';
import './HomeFilms.scss';

const HomeFilmsSlider = ({children, slidesToShow, arrowsScroll, initialSlide, arrowsBlock}) => {
    return (
        <div className='home-films-slider '>
            <div className="home-films-slider-container">
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


export default HomeFilmsSlider;