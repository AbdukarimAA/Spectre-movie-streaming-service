import React, {useEffect, useState} from 'react';
import './HomeMainSlider.scss';
const HomeMainSlider = ({item}: any) => {
    // console.log(item.id)
    // console.log(card?.mainImg)
    return (
        <div className='home-main-slider'>
            <div className="h-m-s-container">
                <img
                    src={item.mainImg}
                    alt=""
                />
                <div className="h-m-s-texts">
                    {/*<img src="https://res.cloudinary.com/dedeobaxo/image/upload/v1678183157/Job_Market_proj/2560px-Logo_spectre_int.svg_qfxgdb.png" className="h-m-s-img-logo" alt=""/>*/}
                    <img src={item.logoImg} className="h-m-s-img-logo" alt=""/>
                    <span className="h-m-s-span">{item.slideText}</span>
                </div>
                <button className='h-m-s-button-submit'>Watch with subscription</button>
            </div>
        </div>
    );
};

export default HomeMainSlider;