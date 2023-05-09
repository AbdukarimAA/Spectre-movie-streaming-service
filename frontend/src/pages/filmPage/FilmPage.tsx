import React, {FormEvent, Suspense, useEffect, useRef, useState} from 'react';
import ReviewsCardSlider from "../../utils/sliders/reviewsCardSlider/ReviewsCardSlider";
import FilmPageHeadings from "../../components/filmPageHeadings/FilmPageHeadings";
import ActorsSliderCard from "../../components/actorsSliderCard/ActorsSliderCard";
import HomeFilmsSlider from "../../utils/sliders/homeFilmsSlider/HomeFilmsSlider";
import HomeFilmsCard from "../../components/homeFilmsCard/HomeFilmsCard";
import {SubmitButton} from "../../utils/customButton/CustomButton";
import ActorsSlider from "../../utils/sliders/actorsSlider/ActorsSlider";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ReviewsCard from "../../components/reviewsCards/ReviewsCard";
import {Avatar, Button, Rating, Typography} from "@mui/material";
import MicNoneIcon from '@mui/icons-material/MicNone';
import TextField from '@mui/material/TextField';
import ReactPlayer from 'react-player';
import {actorCard} from "../../data";
import Box from '@mui/material/Box';
import './FilmPage.scss';
import {Link, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {getOneMovie} from "../../store/slices/movieSlice/movieSlice";
import {getMoviesSelector} from "../../store/slices/movieSlice/movieSelectors";
import LinearProgress from "@mui/material/LinearProgress";
import Loader from "../../components/Loader/Loader";
import {IMovie, IMovieReview} from "../../utils/types/movieDataType";
import {getMovieReviewsSelector} from "../../store/slices/movieReviewSlice/movieReviewSelector";
import {createMovieReview, getMovieReviews} from "../../store/slices/movieReviewSlice/movieReviewSlice";
import {getCurrentUser} from "../../utils/getCurrentUser/getToken";

const FilmPage = () => {
    const [videoPlay, setVideoPlay] = useState<boolean | any>(false);
    const [isPlotActive, setIsPlotActive] = useState<boolean>(false);
    const [spinner, setSpinner] = useState(false);
    const [value, setValue] = useState<any>('');
    const [desc, setDesc] = useState<any>('');
    const [star, setStar] = useState<any>(0);
    const dispatch = useAppDispatch();
    const {oneMovie}: any = useAppSelector(getMoviesSelector);
    const {movieReview} = useAppSelector(getMovieReviewsSelector);
    const {id} = useParams();

    const currentUser = getCurrentUser();

    useEffect(() => {
        const getOneFilm: any = async () => {
            window.scrollTo(0,0);
            setSpinner(true);
            await dispatch<any>(getOneMovie({id})).finally(() => setSpinner(false))
            await dispatch<any>(getMovieReviews({id})).finally(() => setSpinner(false))
            setTimeout(handleVideoStart, 3000)
        }
        getOneFilm();
    }, []);

    const handleReviewInputChange = (e:  FormEvent<HTMLFormElement>) => {
        // e.preventDefault();
        dispatch<any>(createMovieReview({id: id, movieId: id, userId: currentUser._id, desc: desc, stars: star, title: value}));
    };

    const handleDescOpen = () => {
      setIsPlotActive(true)
    };

    const handleDescClose = () => {
        window.scrollTo(670,670);
        setIsPlotActive(false)
    };

    const handleVideoStart = () => {
        setVideoPlay(true);

    };

    const handleVideoStop = () => {
        setVideoPlay(false);
    };

    const videosURL = [
        "https://smr-cdp-r1.playfamily.ru/data/cid/99999999-1679260448-ixHMphhuPk_rkF04ePQKng/spb-cdp25/storage38/trl/5fcf5ded-b330-4d70-acfd-a99141bb4b76.webm#t=5,10",
        "https://smr-cdp-r1.playfamily.ru/data/cid/99999999-1679260448-ixHMphhuPk_rkF04ePQKng/spb-cdp25/storage38/trl/5fcf5ded-b330-4d70-acfd-a99141bb4b76.webm#t=15,25",
        "https://smr-cdp-r1.playfamily.ru/data/cid/99999999-1679260448-ixHMphhuPk_rkF04ePQKng/spb-cdp25/storage38/trl/5fcf5ded-b330-4d70-acfd-a99141bb4b76.webm#t=35,45",
        "https://smr-cdp-r1.playfamily.ru/data/cid/99999999-1679260448-ixHMphhuPk_rkF04ePQKng/spb-cdp25/storage38/trl/5fcf5ded-b330-4d70-acfd-a99141bb4b76.webm#t=55,65"
    ];
    let getRandomFragmentOfVideo = Math.floor(Math.random() * videosURL.length);

    if (spinner) return <Loader />;

    return (
        <div className='film-page' >
            <Suspense fallback={<Loader />}>
                {oneMovie.movie && <div className="film-page-main-img"
                      onMouseEnter={() => setTimeout(handleVideoStart, 3000)}
                >
                    <div className="film-page-main-img-div"
                         onEnded={handleVideoStop}
                    >
                        {
                        !videoPlay ? <img className='film-p-main-pic' src={oneMovie.movie.posterImg} alt=""/> :
                            <ReactPlayer
                                url={oneMovie.movie.trailer}
                                playing={true} muted={true} width='100%' height='100%'/>
                        }
                    </div>
                    <div className="film-p-linear"></div>
                    <div className="film-p-pic-info">
                        <img className='film-p-main-pic-title'
                             src={oneMovie.movie.titleImg}
                             alt=""/>
                        <div className="film-p-pic-exact-info">
                            <button className='film-p-pic-rating'>{oneMovie.movie.rating}</button>
                            <span className='film-p-pic-year'>{oneMovie.movie.year}</span>
                            <span className='film-p-pic-type'>{oneMovie.movie.typeOfMovie}</span>
                            <span className='film-p-pic-duration'>{oneMovie.movie.duration}</span>
                            <MicNoneIcon/>
                            <span className='film-p-pic-lang'>{oneMovie.movie.language}</span>
                            <span className='film-p-pic-limit'>{oneMovie.movie.ageLimit}</span>
                        </div>
                        <div className="film-p-pic-desc">
                            <span>
                                {oneMovie.movie.shortDesc}
                            </span>
                        </div>
                        <div className="film-p-pic-director">
                            <span className='film-p-pic-d'>Director </span>
                            :
                            <span className='film-p-pic-d-name'> {oneMovie.movie.director}</span>
                        </div>
                        <div className="film-p-pic-actors-crew">
                            <span className='film-p-pic-a'>Actors </span>
                            :
                            <span className='film-p-pic-a-names'> {oneMovie.movie.actors && oneMovie.movie.actors.map(item => '\n' + item + ', ')}</span>
                        </div>
                        <div className="film-p-pic-advert">
                            {/*<span className='film-p-pic-advert-main'>Месяц за 1 ₽, затем месяц за 199 ₽</span>*/}
                            {/*<span className='film-p-pic-ad'> в подписке Оптимум</span>*/}
                        </div>
                        <div className="film-p-pic-buttons">
                            <Link to={`/video/${oneMovie.movie._id}`}>
                                <SubmitButton text={'Watch'} className='film-p-pic-button-purchase'/>
                            </Link>
                            {/*<button className='film-p-pic-button-trailer'>Trailer</button>*/}
                            {/*<BookmarkBorderIcon className='film-p-pic-button-icon'/>*/}
                        </div>
                    </div>
                    <div className="film-p-linear-top"></div>
                    <div className="film-p-linear-bottom"></div>
                    {/*<div className="film-p-linear-bottom-connect"></div>*/}
                </div>}

                <FilmPageHeadings text='Description'/>
                {oneMovie.movie && <div className="film-page-desc-section">
                    <div className="film-p-desc-sect-left">
                        <div className="film-p-desc-sect-left-up">
                            {oneMovie.movie.shortDesc}
                        </div>
                        <div className="film-p-desc-sect-left-down">
                            <b className='film-p-desc-sect-left-down-main-span'>Plot</b>
                            <span
                                className={!isPlotActive ? 'film-p-desc-sect-left-down-open' : 'film-p-desc-sect-left-down-open active'}
                                onClick={handleDescOpen}>
                                {
                                    !isPlotActive ?
                                        <span className='film-p-desc-sect-left-down-open-span'>
                                            Detailed description
                                        </span> :
                                        <div className='film-p-desc-sect-left-down-open-exact-info'>
                                            <span className='film-p-desc-sect-left-down-open-exact-info-span'>
                                                {oneMovie.movie.fullDesc}
                                            </span>
                                        </div>
                                }
                            </span>
                            {
                                isPlotActive ?
                                    <span className='film-p-desc-sect-left-down-close-span' onClick={handleDescClose}>
                                        Roll description up
                                    </span> : !isPlotActive
                            }
                        </div>
                    </div>
                    <form className="film-p-desc-sect-right" onSubmit={handleReviewInputChange}>
                        <div className="film-p-desc-sect-right-div">
                            <span className='film-p-desc-sect-right-div-span'>Leave your feedback</span>
                            <span className='film-p-desc-sect-right-div-sp'>Ratings improve recommendations</span>
                            <Box className='box-test' sx={{display: 'flex', alignItems: 'flex-end'}}>
                                {/*<AccountCircle sx={{ color: 'action.active', mr: 1, my: 2.5, fontSize: '2.5rem'}} />*/}
                                <div className="av-test">
                                    {/*<Avatar alt="Remy Sharp" src="" sx={{fontSize: '2.5rem', mr: 2}}/>*/}
                                    <div className="av-test-div">
                                        <TextField
                                            className='av-review-input'
                                            // id="outlined-multiline-flexible"
                                            label="Your Review title"
                                            multiline
                                            margin={"normal"}
                                            onChange={(event) => {
                                                setValue(event.target.value);
                                            }}
                                            maxRows={1}
                                        />
                                        <TextField
                                            // id="outlined-multiline-flexible"
                                            label="Your Review description"
                                            multiline
                                            margin={"normal"}
                                            onChange={(event) => {
                                                setDesc(event.target.value);
                                            }}
                                            maxRows={2}
                                        />
                                    </div>
                                    <div className="av-test-rating">
                                        <Typography component="legend"/>
                                        <Rating
                                            name="simple-controlled"
                                            value={star}
                                            onChange={(event, newValue) => {
                                                setStar(newValue);
                                            }}
                                        />
                                    </div>
                                </div>
                                <Button variant="contained" sx={{m: 2}} type='submit'>Publish</Button>
                            </Box>
                        </div>
                    </form>
                </div>}

                <FilmPageHeadings text='Trailer'/>

                {oneMovie.movie && <div className="film-page-trailer">
                    <video
                        src={oneMovie.movie.trailer}
                        controls
                    />
                </div>}

                {/*<FilmPageHeadings text='Similar'/>*/}

                {/*<HomeFilmsSlider*/}
                {/*    slidesToShow={6}*/}
                {/*    arrowsScroll={3}*/}
                {/*    initialSlide={true}*/}
                {/*    arrowsBlock={false}*/}
                {/*>*/}
                {/*    {*/}
                {/*        lists.list && lists.list.map(item => (*/}
                {/*            <HomeFilmsCard key={item.id} film={item}/>*/}
                {/*        ))*/}
                {/*    }*/}
                {/*</HomeFilmsSlider>*/}

                {/*<FilmPageHeadings text='In collections'/>*/}

                {/*<HomeFilmsSlider*/}
                {/*    slidesToShow={6}*/}
                {/*    arrowsScroll={3}*/}
                {/*    initialSlide={true}*/}
                {/*    arrowsBlock={false}*/}
                {/*>*/}
                {/*    {*/}
                {/*        filmCar.map(item => (*/}
                {/*            <HomeFilmsCard key={item.id} film={item}/>*/}
                {/*        ))*/}
                {/*    }*/}
                {/*</HomeFilmsSlider>*/}

                {movieReview.data && movieReview.data.length !== 0 ? <FilmPageHeadings text='Reviews and feedbacks'/> : <FilmPageHeadings text='No any reviews on this movie yet'/>}

                { movieReview.data && movieReview.data.length !== 0 ?
                    <ReviewsCardSlider
                    slidesToShow={2}
                    slidesToScroll={2}
                    infinite={true}
                    autoplay={true}
                    autoplaySpeed={8800}
                    pauseOnHover={true}
                    pauseOnFocus={true}
                    arrows={false}
                    fade={false}
                    speed={1800}
                >
                    {
                        movieReview.data && movieReview.data.map((review: IMovieReview) => (
                            <ReviewsCard review={review} key={review.id} />
                        ))
                    }
                </ReviewsCardSlider> : <FilmPageHeadings text='Be the first one and leave your review!'/>
                }

                <FilmPageHeadings text='Movie crew'/>

                <ActorsSlider
                    slidesToShow={6}
                    slidesToScroll={6}
                    infinite={true}
                    autoplay={true}
                    autoplaySpeed={8800}
                    pauseOnHover={true}
                    pauseOnFocus={true}
                    arrows={false}
                    fade={false}
                    speed={1500}
                >
                    {
                        actorCard && actorCard.map((actor) => (
                            <ActorsSliderCard actor={actor} key={actor.id}/>
                        ))
                    }
                </ActorsSlider>

                <hr/>

                {oneMovie.movie && <div className="film-page-foot-info">
                    <div className="film-page-foot-info-container">
                        <div className="film-page-foot-info-div">
                            <span className='f-p-foot-title'>Information</span>
                            <br/>
                            <span className='f-p-foot-span'>Country</span>
                            <span>{oneMovie.movie.country}</span>
                            <br/>
                            <span className='f-p-foot-span'>Genre</span>
                            <span>{oneMovie.movie.genre}</span>
                            <br/>
                            <span className='f-p-foot-span'>Original title</span>
                            <span>{oneMovie.movie.originalTitle}</span>
                            <br/>
                            <span className='f-p-foot-span'>Release date</span>
                            <span>{oneMovie.movie.releaseDate}</span>
                        </div>
                        <div className="film-page-foot-crew-div">
                            <span className='f-p-foot-title'>Crew</span>
                            <br/>
                            <span className='f-p-foot-span'>Director</span>
                            <span>{oneMovie.movie.director}</span>
                            <br/>
                            <span className='f-p-foot-span'>Actors</span>
                            {
                                <span>{oneMovie.movie.actors && oneMovie.movie.actors.map(item => '\n' + item + ', ')}</span>
                            }
                            <br/>
                            <span className='f-p-foot-span'>Producers</span>
                            <span>{oneMovie.movie.producers && oneMovie.movie.producers.map(item => '\n' + item + ', ')} </span>
                            <br/>
                            <span className='f-p-foot-span'>Screenwriters</span>
                            <span>{oneMovie.movie.screenWriters}</span>
                            <br/>
                            <span className='f-p-foot-span'>Operators</span>
                            <span>{oneMovie.movie.operators}</span>
                        </div>
                        <div className="film-page-foot-sound">
                            <span className='f-p-foot-title'>Sound and Subtitles</span>
                            <br/>
                            <span className='f-p-foot-span'>Audio Track</span>
                            <span>{oneMovie.movie.audioLyrics}</span>
                            <br/>
                            <span className='f-p-foot-span'>Quality</span>
                            {
                                <span>{oneMovie.movie.quality && oneMovie.movie.quality.map(item => '\n' + item + ', ')}</span>
                            }
                        </div>
                    </div>
                </div>}

                <hr/>
            </Suspense>
        </div>
    );
};

export default FilmPage;