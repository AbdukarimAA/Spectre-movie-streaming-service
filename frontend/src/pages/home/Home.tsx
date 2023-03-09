import React from 'react';
import './Home.scss';
import Slide from "../../components/slide/Slide";
import HomeMainSlider from "../../components/HomeMainSlider/HomeMainSlider";
import { cards} from "../../data";
import login from "../login/Login";

const Home = () => {
    // console.log(cards);
    return (
        <div className='home'>
            <Slide slidesToShow={1} arrowsScroll={1} centerMode={true} autoplay={false} autoplaySpeed={10000} dots={true} centerPadding={70}>
                {cards.map(card => (
                    <HomeMainSlider key={card.id} item={card}/>
                ))}
            </Slide>
        </div>
    );
};

export default Home;