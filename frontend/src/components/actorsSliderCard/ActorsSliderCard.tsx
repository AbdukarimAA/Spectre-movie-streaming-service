import React, {useEffect, useState} from 'react';
import './ActorsSliderCard.scss';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {getOneActor} from "../../store/slices/actorSlice/actorSlice";
import {getActorReviews} from "../../store/slices/actorReviewSlice/actorReviewSlice";
import Loader from "../Loader/Loader";
import {getOneActorsSelector} from "../../store/slices/actorSlice/actorSelectors";
import {axiosRequest} from "../../utils/Request/newAxiosRequest";
import {Link} from "react-router-dom";


const ActorsSliderCard = ({actorId}) => {
    const [spinner, setSpinner] = useState(false);
    const [actors, setActors] = useState<any>('')
    const {actor} = useAppSelector(getOneActorsSelector);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const het = async () => {
            await axiosRequest.get(`/actor/getActor/${actorId}`)
                .then(res => {
                    setActors(res.data)
                })
        }

        het()
    }, [])

    // useEffect(() => {
    //     const getOneActorFunc: any = async () => {
    //         window.scrollTo(0, 0)
    //         setSpinner(true);
    //         await dispatch<any>(getOneActor({actorId})).finally(() => setSpinner(false))
    //     }
    //
    //     getOneActorFunc()
    // }, [actorId])

    if (spinner) return <Loader />;

    console.log(actors)


    return (
        <div className='actors-slider'>
            {<Link to={`/actor/${actorId}`} className='link'><div className="actors-slider-div-container">
                <div className="actors-slider-div">
                    <img className='actors-slider-img' src={actors.img && actors.img} alt=""/>
                    <div className="div-test">
                        <span className='actors-slider-div-actor-name'>
                            {actors.nameRus && actors.nameRus}
                        </span>
                        {/*<span className='actors-slider-div-actor-last'>*/}
                        {/*    {actor.lastName}*/}
                        {/*</span>*/}
                        <span className='actors-slider-div-role'>
                            Актер
                        </span>
                    </div>
                </div>
            </div></Link>}
        </div>
    );
};

export default ActorsSliderCard;