import React, {useRef} from 'react';
import Slider from "react-slick";
import './HomeFilms.scss';
import {useAppSelector} from "../../../hooks";
import {getMoviesSelector} from "../../../store/slices/movieSlice/movieSelectors";
import {shallowEqual} from "react-redux";

const HomeFilmsSlider = ({children, slidesToShow, infinite, arrows, speed, slidesToScroll}) => {
    const slider = useRef<any>(null);
    const {movie} = useAppSelector(getMoviesSelector, shallowEqual);

    return (
        <div className='home-films-slider '>
            {
                movie.status === 'success' ?
                    <div className='main-slider-arrow-div-left' onClick={() => slider?.current?.slickPrev()}>
                        <img className='slider-img' src="https://www.amediateka.ru/static/images/player/left.svg" alt="arrowLeft"/>
                    </div> : ''
            }

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
            {
                movie.status === 'success' ?
                    <div className='main-slider-arrow-div-right' onClick={() => slider?.current?.slickNext()}>
                        <img className='slider-img' src="https://www.amediateka.ru/static/images/player/right.svg" alt="arrowRight"/>
                    </div>  : ''
            }
        </div>
    );
};


export default HomeFilmsSlider;