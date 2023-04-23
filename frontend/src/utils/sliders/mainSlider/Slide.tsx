import React, {ReactNode, useRef, useState} from 'react';
import Slider from "react-slick";
import './Slide.scss';
import {useAppSelector} from "../../../hooks";
import {getMoviesSelector} from "../../../store/slices/movieSlice/movieSelectors";
import {shallowEqual} from "react-redux";

interface ISlide {
    children: ReactNode,
    infinite: boolean,
    slidesToShow: number,
    autoplay: boolean,
    autoplaySpeed: number,
    centerMode: boolean,
    centerPadding: string,
    initialSlide: number,
    pauseOnHover: boolean,
    pauseOnFocus: boolean,
    arrows: boolean
    fade: boolean
    speed: number
}

const Slide = ({children, slidesToShow, infinite, autoplay, autoplaySpeed, centerMode, centerPadding, initialSlide, pauseOnHover, pauseOnFocus, arrows, fade, speed}: ISlide) => {
    const slider = useRef<any>(null);
    const {movie} = useAppSelector(getMoviesSelector, shallowEqual);
    return (
        <div className='slide'>
            {
                movie.status === 'success' ?
                    <div className='main-slider-arrow-div-left' onClick={() => slider?.current?.slickPrev()}>
                        <img src="https://www.amediateka.ru/static/images/player/left.svg" alt="arrowLeft"/>
                    </div> : ''
            }

            <div className="container">
                <Slider
                    ref={slider}
                    infinite={infinite}
                    slidesToShow={slidesToShow}
                    autoplay={autoplay}
                    autoplaySpeed={autoplaySpeed}
                    centerMode={centerMode}
                    centerPadding={centerPadding}
                    initialSlide={initialSlide}
                    pauseOnHover={pauseOnHover}
                    pauseOnFocus={pauseOnFocus}
                    arrows={arrows}
                    fade={fade}
                    speed={speed}
                >
                    {children}
                </Slider>
            </div>

            {
                movie.status === 'success' ?
                    <div className='main-slider-arrow-div-right' onClick={() => slider?.current?.slickNext()}>
                        <img src="https://www.amediateka.ru/static/images/player/right.svg" alt="arrowRight"/>
                    </div> : ''
            }
        </div>
    );
};

export default Slide;