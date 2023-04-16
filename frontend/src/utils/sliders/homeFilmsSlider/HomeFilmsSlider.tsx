import React, {useRef} from 'react';
import Slider from "react-slick";
import './HomeFilms.scss';

const HomeFilmsSlider = ({children, slidesToShow, infinite, arrows, speed, slidesToScroll}) => {
    const slider = useRef<any>(null);

    return (
        <div className='home-films-slider '>
            <div className='main-slider-arrow-div-left' onClick={() => slider?.current?.slickPrev()}>
                <img className='slider-img' src="https://www.amediateka.ru/static/images/player/left.svg" alt="arrowLeft"/>
            </div>
            <div className="home-films-slider-container">
                <Slider
                    ref={slider}
                    slidesToShow={slidesToShow}
                    infinite={infinite}
                    arrows={arrows}
                    speed={speed}
                    slidesToScroll={slidesToScroll}
                >
                    {children}
                </Slider>
            </div>
            <div className='main-slider-arrow-div-right' onClick={() => slider?.current?.slickNext()}>
                <img className='slider-img' src="https://www.amediateka.ru/static/images/player/right.svg" alt="arrowRight"/>
            </div>
        </div>
    );
};


export default HomeFilmsSlider;