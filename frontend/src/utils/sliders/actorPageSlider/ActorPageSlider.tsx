import React, {useRef} from 'react';
import Slider from "react-slick";
import './ActorPageSlider.scss';

const ActorPageSlider = ({children, slidesToShow, infinite, slidesToScroll, arrows, speed}) => {
    const slider = useRef<any>(null);

    return (
        <div className='actor-page-slider'>
            {
                //movie.status === 'success' ?
                    <div className='actor-page-slider-arrow-div-left' onClick={() => slider?.current?.slickPrev()}>
                        <img className='slider-img' src="https://www.amediateka.ru/static/images/player/left.svg" alt="arrowLeft"/>
                    </div>
            }

            <div className="actor-page-slider-container">
                <Slider
                    ref={slider}
                    slidesToShow={slidesToShow}
                    slidesToScroll={slidesToScroll}
                    infinite={infinite}
                    arrows={arrows}
                    speed={speed}
                >
                    {children}
                </Slider>
            </div>

            {
                //movie.status === 'success' ?
                    <div className='actor-page-slider-arrow-div-right' onClick={() => slider?.current?.slickNext()}>
                        <img className='slider-img' src="https://www.amediateka.ru/static/images/player/right.svg" alt="arrowRight"/>
                    </div>
            }
        </div>
    );
};

export default ActorPageSlider;