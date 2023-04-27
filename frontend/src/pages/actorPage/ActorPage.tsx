import React, {FormEvent, useEffect, useRef, useState} from 'react';
import './ActorPage.scss';
import {actorCard, actorPageCard, filmCar} from "../../data";
import HomeFilmsCard from "../../components/homeFilmsCard/HomeFilmsCard";
import HomeFilmsSlider from "../../utils/sliders/homeFilmsSlider/HomeFilmsSlider";
import ActorsSliderCard from "../../components/actorsSliderCard/ActorsSliderCard";
import ActorsSlider from "../../utils/sliders/actorsSlider/ActorsSlider";
import ActorPageSlider from "../../utils/sliders/actorPageSlider/ActorPageSlider";
import ActorPageSliderCard from "../../components/actorPageSliderCard/ActorPageSliderCard";
import FullFilmography from "../../components/fullFilmography/FullFilmography";
import ActorPageReviewCard from "../../components/actorPageReviewCard/ActorPageReviewCard";
import TextField from "@mui/material/TextField";
import {useAppSelector} from "../../hooks";
import {getActorsSelector, getOneActorsSelector} from "../../store/slices/actorSlice/actorSelectors";
import {useAppDispatch} from "../../store/redux-hook";
import {getOneActor} from "../../store/slices/actorSlice/actorSlice";
import {useParams} from "react-router-dom";
import {IActorDataType} from "../../utils/types/actorDataType";
import Loader from "../../components/Loader/Loader";
import {createMovieReview} from "../../store/slices/movieReviewSlice/movieReviewSlice";
import {createActorReview, getActorReviews} from "../../store/slices/actorReviewSlice/actorReviewSlice";
import {getCurrentUser} from "../../utils/getCurrentUser/getToken";
import {getActorReviewsSelector} from "../../store/slices/actorReviewSlice/actorReviewSelector";

const ActorPage = () => {
    const [isDescActive, setIsDescActive] = useState<boolean>(false);
    const [isBioActive, setIsBioActive] = useState<boolean>(false);
    const [isReviewButtonActive, setReviewButtonActive] = useState<boolean>(true);
    const [inputReview, setInputReview] = useState<string>('')
    const [spinner, setSpinner] = useState(false);
    const {actor} = useAppSelector(getOneActorsSelector);
    const {actorReview} = useAppSelector(getActorReviewsSelector)
    const currentUser = getCurrentUser();
    const dispatch = useAppDispatch();
    const {id} = useParams();

    const ref = useRef();

    // console.log(currentUser._id)
    useEffect(() => {
        const getOneActorFunc: any = async () => {
            window.scrollTo(0, 0)
            setSpinner(true);
            await dispatch<any>(getOneActor({id})).finally(() => setSpinner(false))
            await dispatch<any>(getActorReviews({id})).finally(() => setSpinner(false))
        }

        getOneActorFunc()
    }, [])


    useEffect(() => {
        if (inputReview.length >= 10) {
            setReviewButtonActive(false)
        } else {
            setReviewButtonActive(true)
        }
    }, [inputReview])

    const handleActorReviewInputChange = (e:  FormEvent<HTMLFormElement>) => {
        // e.preventDefault();
        dispatch<any>(createActorReview({id: id, actorId: id, userId: currentUser._id, review: inputReview}));
    };

    const handleBioOpen = () => {
        setIsBioActive(true)
    };

    const handleBioClose = () => {
        setIsBioActive(false)
        window.scrollTo(3150,3150)
    };

    const handleDescOpen = () => {
        setIsDescActive(true)
    };

    const handleDescClose = () => {
        setIsDescActive(false)
    };

    if (spinner) return <Loader />;

    return (
        <div className='actor-page'>
            <div className="test">
                <div className="actor-page-test">
                    <div className="actor-page-img">
                        <div className="actor-page-linear-left"></div>
                        <div className="actor-page-linear-bottom"></div>
                        <div className="actor-page-linear-right"></div>
                        <div className="actor-page-linear-top"></div>
                        <img src={actor && actor.img} alt=""/>
                    </div>
                </div>
            </div>
            {actor && <div className="actor-page-info">
                <div className="actor-page-info-container">
                    <span className='actor-page-first-span'>{actor.nameRus}</span>
                    <span className='actor-page-main-span'>{actor.nameEng}</span>
                    <span className='actor-page-desc' onClick={handleDescOpen}>
                        {
                            !isDescActive ?
                                <div className='actor-page-open-span-div'>
                                    <span className='actor-page-open-span'>
                                        Прочитайте информацию об актере
                                    </span>
                                </div> :
                                <div className='actor-page-exact-info'>
                                    <span className='actor-page-exact-info-span'>
                                        {actor.shortBio}
                                    </span>
                                </div>
                        }
                    </span>
                    {
                        isDescActive ?
                            <span className='actor-page-close-span' onClick={handleDescClose}>
                                Roll description up
                            </span> : !isDescActive
                    }
                    <span className='actor-page-movies-count'>Всего фильмов: {actor.totalMovies}</span>
                    {
                        actor.movies && actor.movies.length !== 0 ? <span className='actor-page-slider-span'>Главные фильмы</span> :
                            ''
                    }

                    {actor.movies && actor.movies.length !== 0 ? <ActorPageSlider
                        slidesToShow={3}
                        slidesToScroll={2}
                        infinite={true}
                        arrows={true}
                        speed={900}
                    >
                        {
                            actor.movies && actor.movies.map(item => (
                                <ActorPageSliderCard key={item.id} info={item}/>
                            ))
                        }
                    </ActorPageSlider> : ''}

                    {actor.movies && actor.movies.length !== 0 ? <span className='actor-page-slider-span'>Главные фильмы</span> : ''}

                    {
                        actor.movies && actor.movies.map(film => (
                            <FullFilmography key={film._id} id={film}/>
                        ))
                    }

                    <span className='actor-page-slider-span'>Biography</span>

                    <span className='actor-page-open-span-open'>
                        {actor.bio}
                    </span>

                    <span className='actor-page-desc' onClick={handleBioOpen}>
                        {
                            !isBioActive ?
                                <div className='actor-page-open-span-div'>
                                    <span className='actor-page-open-span'>
                                        Read Full biography
                                    </span>
                                </div> :
                                <div className='actor-page-exact-info'>
                                    <span className='actor-page-exact-info-span'>
                                            {actor.fullBio}
                                    </span>
                                </div>
                        }
                    </span>
                    {
                        isBioActive ?
                            <span className='actor-page-bio-close-span' onClick={handleBioClose}>
                                Roll Biography up
                            </span> : !isBioActive
                    }

                    <span className='actor-page-slider-span'>Reviews</span>

                    <form className="actor-page-review-input" onSubmit={handleActorReviewInputChange}>
                        <div className="actor-page-review-input-span">
                            <span className='optional'>Optional *</span>
                            <input ref={ref} onChange={e => setInputReview(e.target.value)}
                                   placeholder='Share your thoughts about the actor'/>
                            <span>Required 10 symbols, you have entered: {inputReview.length}</span>
                            <span>You can leave only 1 review</span>
                        </div>
                        <button disabled={isReviewButtonActive}>Send</button>
                    </form>

                    {
                        actorReview.review && actorReview.review.map(item => (
                            <ActorPageReviewCard key={item._id} review={item}/>
                        ))
                    }
                </div>
            </div>}
        </div>
    );
};

export default ActorPage;