import {getListMovies, getRandomMovies} from "../../store/slices/movieSlice/movieSlice";
import {getMoviesSelector} from "../../store/slices/movieSlice/movieSelectors";
// import HomeMainSlider from "../../utils/sliders/HomeMainSlider/HomeMainSlider";
// import HomeHeadings from "../../components/homeHeadings/HomeHeadings";
import {useAppDispatch, useAppSelector} from "../../hooks";
import LinearProgress from '@mui/material/LinearProgress';
import Slide from "../../utils/sliders/mainSlider/Slide";
import React, {useEffect, useState, lazy, Suspense} from 'react';
import {shallowEqual} from "react-redux";
import './Home.scss';
import Loader from "../../components/Loader/Loader";

const HomeHeadings = lazy(() => import('../../components/homeHeadings/HomeHeadings'));
const HomeMainSlider = lazy(() => import('../../utils/sliders/HomeMainSlider/HomeMainSlider'));

const Home = ({type, genre}: any) => {
    // const [genre, setGenre] = useState<any>(null);
    const [spinner, setSpinner] = useState(false);
    const {movie, lists} = useAppSelector(getMoviesSelector, shallowEqual);
    const dispatch = useAppDispatch();

    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

    useEffect(() => {
        const getMovieListByTypeOrGenre: any = async () => {
            await Promise.all(dispatch<any>(getListMovies({type, genre})))
        }
        getMovieListByTypeOrGenre();
    }, [type, genre]);

    useEffect(() => {
        const randomMovieFetch: any = async () => {
            setSpinner(true);
            await dispatch<any>(getRandomMovies()).finally(() => setSpinner(false))
        }
        randomMovieFetch()
    }, []);

    if (spinner) return <Loader />;

    return (
        <div className='home'>

                {
                    movie && movie.status === 'success' && lists.status === 'success' ?
                        <>
                            <Suspense fallback={<Loader />}>
                                {
                                    <Slide
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
                                    </Slide>
                                }
                            </Suspense>
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
                            <>
                                <Suspense fallback={<Loader />}>
                                    {
                                        lists.list && lists.list.map((list) => (
                                            <HomeHeadings key={list.id} list={list}/>)
                                        )
                                    }
                                </Suspense>
                            </>
                        </>: ''
                }

        </div>
    );
};

export default Home;