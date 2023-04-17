import HomeMainSlider from "../../utils/sliders/HomeMainSlider/HomeMainSlider";
import HomeHeadings from "../../components/homeHeadings/HomeHeadings";
import React, {memo, useEffect, useLayoutEffect, useState} from 'react';
import {axiosRequest} from "../../utils/Request/newAxiosRequest";
import Slide from "../../utils/sliders/mainSlider/Slide";
import { Suspense } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import './Home.scss';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {getListMovies, getRandomMovies} from "../../store/slices/movieSlice/movieSlice";
import {getMoviesSelector, getMoviesSelectorLoading} from "../../store/slices/movieSlice/movieSelectors";

const Home = ({type}) => {
    const [genre, setGenre] = useState<any>(null);
    const [spinner, setSpinner] = useState(false);
    const {movie, lists} = useAppSelector(getMoviesSelector);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const getMovieListByTypeOrGenre: any = async () => {
            setSpinner(true);
            dispatch<any>(getListMovies({type, genre})).finally(() => setSpinner(false))
        }
        getMovieListByTypeOrGenre();
    }, [type, genre]);

    useEffect(() => {
        const randomMovieFetch: any = () => {
            setSpinner(true)
            dispatch<any>(getRandomMovies()).finally(() => setSpinner(false))
        }
        randomMovieFetch()
    }, []);


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
                {movie.data && movie?.data.map(card => (
                    <HomeMainSlider key={card._id} item={card}/>
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

            {lists.list && lists.list.map(list => (
                <HomeHeadings key={list.id} list={list}/>
            ))}

        </div>
    );
};

export default Home;