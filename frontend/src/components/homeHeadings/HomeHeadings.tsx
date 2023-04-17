import React, {useState} from 'react';
import './HomeHeadings.scss';
import {filmCar} from "../../data";
import HomeFilmsCard from "../homeFilmsCard/HomeFilmsCard";
import HomeFilmsSlider from "../../utils/sliders/homeFilmsSlider/HomeFilmsSlider";
import LinearProgress from "@mui/material/LinearProgress";

const HomeHeadings = ({list}) => {

    return (
        <div className='home-headings'>
            <div className="h-headings-span">
                <span>{list.title}</span>
            </div>
            <HomeFilmsSlider
                slidesToShow={6}
                infinite={true}
                arrows={false}
                speed={1300}
                slidesToScroll={6}
            >
                {
                    list.content.map(film => (
                        <HomeFilmsCard key={film.id} film={film}/>
                    ))
                }
            </HomeFilmsSlider>
        </div>
    );
};

export default HomeHeadings;