import React, {useEffect, useState} from 'react';
import './HomeMainSlider.scss';
import {Link} from "react-router-dom";
const HomeMainSlider = ({item}: any) => {

    return (
        <div className='home-main-slider'>
            {<Link  to={`/film/${item._id}`}>
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
            </Link>
            }
        </div>
    );
};

export default HomeMainSlider;