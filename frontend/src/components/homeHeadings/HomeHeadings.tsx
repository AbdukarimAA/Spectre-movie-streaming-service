import HomeFilmsSlider from "../../utils/sliders/homeFilmsSlider/HomeFilmsSlider";
// import HomeFilmsCard from "../homeFilmsCard/HomeFilmsCard";
import React, {lazy, memo, Suspense, useState} from 'react';
import './HomeHeadings.scss';
import Loader from "../Loader/Loader";

const HomeFilmsCard = lazy(() => import('../homeFilmsCard/HomeFilmsCard'));

const HomeHeadings = ({list}) => {

    return (
        <div className='home-headings'>
            <div className="h-headings-span">
                <span>{list.title}</span>
            </div>

            <Suspense fallback={<Loader />}>
                {<HomeFilmsSlider
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
                </HomeFilmsSlider>}
            </Suspense>
        </div>
    );
};

export default memo(HomeHeadings);