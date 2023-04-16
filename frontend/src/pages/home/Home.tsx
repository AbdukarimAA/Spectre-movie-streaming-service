import HomeMainSlider from "../../utils/sliders/HomeMainSlider/HomeMainSlider";
import HomeHeadings from "../../components/homeHeadings/HomeHeadings";
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {axiosRequest} from "../../utils/Request/newAxiosRequest";
import Slide from "../../utils/sliders/mainSlider/Slide";
import { cards, filmCar} from "../../data";
import './Home.scss';
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';

const Home = ({type}) => {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState<any>(null);
    const [movies, setMovies] = useState([]);
    const [spinner, setSpinner] = useState(false);

    useEffect(() => {
        const test = async () => {
            try {
                const {data} = await axiosRequest.get(`list/getList${type ? '?type=' + type : ''}${genre ? '&genre=' + genre : ''}`);
                setLists(data);
            } catch (e) {
                console.log(e)
            }
        }
        test();
    }, [type, genre]);

    useEffect(() => {
        const fetching = async () => {
            setSpinner(true)
            const {data} = await axiosRequest.get('movie/getRandomMovie')
                .then(res => setMovies(res.data))
                .finally(() => setSpinner(false))
        }
        fetching();
    }, [])

    if (spinner) return <LinearProgress />;

    return (
        <div className='home'>
            {<Slide
                slidesToShow={1}
                infinite={true}
                autoplay={true}
                autoplaySpeed={5000}
                centerMode={true}
                centerPadding={'80px'}
                initialSlide={1}
                pauseOnHover={true}
                pauseOnFocus={true}
                arrows={false}
                fade={false}
                speed={900}
            >
                {movies?.map(card => (
                    <HomeMainSlider key={card.id} item={card}/>
                ))}
            </Slide>}
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

            {lists.map(list => (
                <HomeHeadings key={list.id} list={list}/>
            ))}

        </div>
    );
};

export default Home;