import React from 'react';
import './Home.scss';
import Slide from "../../components/slide/Slide";
import HomeMainSlider from "../../components/HomeMainSlider/HomeMainSlider";
import { cards, filmCar} from "../../data";
import HomeFilmsCard from "../../components/homeFilmsCard/HomeFilmsCard";
import HomeFilmsSlider from "../../components/homeFilmsSlider/HomeFilmsSlider";
import HomeHeadings from "../../components/homeHeadings/HomeHeadings";

const Home = () => {
    return (
        <div className='home'>
            <Slide
                slidesToShow={1}
                arrowsScroll={1}
                centerMode={true}
                autoplay={false}
                autoplaySpeed={10000}
                centerPadding={70}
                initialSlide={false}>
                {cards.map(card => (
                    <HomeMainSlider key={card.id} item={card}/>
                ))}
            </Slide>
            <div className="home-subs-buttons">
                <div className="test">
                    <div className="h-subs-container">
                        <button className="home-subs">30 days for 1 dollar</button>
                    </div>
                    <div className="h-subs-container">
                        <button className="home-subs">Promo code activation</button>
                    </div>
                </div>
            </div>

            <div className="he">
                <div className="heading">
                <HomeHeadings />
                </div>
            </div>


            <HomeFilmsSlider
                slidesToShow={6}
                arrowsScroll={3}
                initialSlide={true}
                arrowsBlock={false}
            >
                {
                    filmCar.map(item => (
                        <HomeFilmsCard key={item.id} film={item}/>
                    ))
                }
            </HomeFilmsSlider>
        </div>
    );
};

export default Home;