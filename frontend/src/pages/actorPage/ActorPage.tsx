import React, {useEffect, useRef, useState} from 'react';
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

const ActorPage = () => {
    const [isDescActive, setIsDescActive] = useState<boolean>(false);
    const [isBioActive, setIsBioActive] = useState<boolean>(false);
    const [isReviewButtonActive, setReviewButtonActive] = useState<boolean>(true);
    const [inputReview, setInputReview] = useState<string>('')
    const {actor} = useAppSelector(getOneActorsSelector);

    const dispatch = useAppDispatch();
    const {id} = useParams();

    const ref = useRef();

    useEffect(() => {
        const getOneActorFunc: any = async () => {
            await dispatch<any>(getOneActor({id}))
        }

        getOneActorFunc()
    }, [])

    // console.log(oneActor)

    useEffect(() => {
        if (inputReview.length >= 10) {
            setReviewButtonActive(false)
        } else {
            setReviewButtonActive(true)
        }
    }, [inputReview])


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
                                        Biography
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
                    <span className='actor-page-movies-count'>{actor.totalMovies}</span>
                    <span className='actor-page-slider-span'>Главные фильмы</span>

                    <ActorPageSlider
                        slidesToShow={3}
                        arrowsScroll={3}
                        initialSlide={true}
                        arrowsBlock={false}
                    >
                        {
                            actorPageCard.map(item => (
                                <ActorPageSliderCard key={item.id} info={item}/>
                            ))
                        }
                    </ActorPageSlider>

                    <span className='actor-page-slider-span'>Главные фильмы</span>

                    {
                        actorPageCard.map(film => (
                            <FullFilmography key={film.id} film={film}/>
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

                    <div className="actor-page-review-input">
                        <div className="actor-page-review-input-span">
                            <span className='optional'>Optional *</span>
                            <input ref={ref} onChange={e => setInputReview(e.target.value)}
                                   placeholder='Share your thoughts about the actor'/>
                            <span>Required 10 symbols, you have entered: {inputReview.length}</span>
                        </div>
                        <button disabled={isReviewButtonActive}>Send</button>
                    </div>

                    <ActorPageReviewCard/>
                    <ActorPageReviewCard/>
                    <ActorPageReviewCard/>
                    <ActorPageReviewCard/>
                </div>
            </div>}
        </div>
    );
};

export default ActorPage;