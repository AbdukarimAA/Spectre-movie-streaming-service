import React, {useEffect, useState} from 'react';
import './HomeMainSlider.scss';
const HomeMainSlider = ({item}: any) => {

    return (
        <div className='home-main-slider'>
            <div className="h-m-s-container">
                <img
                    src={item?.posterImg}
                    alt=""
                />
                <div className="h-m-s-texts">
                    <img src={item.titleImg} className="h-m-s-img-logo" alt=""/>
                    <span className="h-m-s-span">{item.shortDesc}</span>
                </div>
                <button className='h-m-s-button-submit'>Watch with subscription</button>
            </div>
        </div>
    );
};

export default HomeMainSlider;