import React, {useRef} from 'react';
import Slider from "react-slick";
import './ReviewsCardSlider.scss';

const ReviewsCardSlider = ({children, slidesToShow, slidesToScroll, infinite, autoplay, autoplaySpeed, pauseOnHover, pauseOnFocus, arrows, fade, speed}) => {
    const slider = useRef<any>(null);

    return (
        <div className='reviews-slider'>
            <div className='main-slider-arrow-div-left' onClick={() => slider?.current?.slickPrev()}>
                <img src="https://www.amediateka.ru/static/images/player/left.svg" alt="arrowLeft"/>
            </div>
            <div className="reviews-slider-container">
                <Slider
                    ref={slider}
                    slidesToShow={slidesToShow}
                    slidesToScroll={slidesToScroll}
                    infinite={infinite}
                    autoplay={autoplay}
                    autoplaySpeed={autoplaySpeed}
                    pauseOnHover={pauseOnHover}
                    pauseOnFocus={pauseOnFocus}
                    arrows={arrows}
                    fade={fade}
                    speed={speed}
                >
                    {children}
                </Slider>
            </div>
            <div className='main-slider-arrow-div-right' onClick={() => slider?.current?.slickNext()}>
                <img src="https://www.amediateka.ru/static/images/player/right.svg" alt="arrowRight"/>
            </div>
        </div>
    );
};

export default ReviewsCardSlider;