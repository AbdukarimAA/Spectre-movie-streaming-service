import React, {useEffect, useState} from 'react';
import './ActorPageSliderCard.scss';
import {Link} from "react-router-dom";
import {axiosRequest} from "../../utils/Request/newAxiosRequest";
import {IMovie} from "../../utils/types/movieDataType";
import Loader from "../Loader/Loader";

const ActorPageSliderCard = ({info}) => {
    const [movie, setMovie] = useState<IMovie>();
    const [spinner, setSpinner] = useState(false);

    useEffect(() => {
        const getMovie: any = async () => {
            const res = await axiosRequest.get("/movie/getMovie/" + info)
                .then(res => setMovie(res.data))
                .finally(() => setSpinner(false))
        };
        getMovie();
    }, [info]);

    if (spinner) return <Loader />;

    return (
        <div className='actor-page-slider-card'>
            {<Link to={`/film/${info}`} className='link'>
                {movie && <div className="actor-page-slider-card-container">
                    <img src={movie.posterImg} alt=""/>
                    <span>{movie.title}</span>
                    <span className='actor-page-slider-card-container-desc'>{info.actorSliderDesc}</span>
                    <div className="actor-page-slider-card-container-button">
                        <button className='actor-page-slider-card-container-button-add'>Add to favorites</button>
                        <button>Watch later</button>
                    </div>
                </div>}
            </Link>}
        </div>
    );
};

export default ActorPageSliderCard;