import React, {ReactNode} from 'react';
import Slider from 'infinite-react-carousel';
import './Slide.scss';

interface ISlide {
    children: ReactNode,
    slidesToShow: number,
    arrowsScroll: number,
    centerMode: boolean,
    autoplay: boolean,
    autoplaySpeed: number,
    dots: boolean,
    centerPadding: number
}

const Slide = ({children, slidesToShow, arrowsScroll, centerMode, autoplay, autoplaySpeed, dots, centerPadding}: ISlide) => {
    return (
        <div className='slide'>
            <div className="container">
                <Slider
                    slidesToShow={slidesToShow}
                    arrowsScroll={arrowsScroll}
                    centerMode={centerMode}
                    autoplay={autoplay}
                    autoplaySpeed={autoplaySpeed}
                    dots={dots}
                    centerPadding={centerPadding}
                >
                    {children}
                </Slider>
            </div>
        </div>
    );
};

export default Slide;