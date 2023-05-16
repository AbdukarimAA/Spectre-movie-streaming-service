import React, {useEffect, useState} from 'react';
import './MovieHistoryCard.scss';
import {IMovie} from "../../utils/types/movieDataType";
import {useAppDispatch} from "../../hooks";
import {getCurrentUser} from "../../utils/getCurrentUser/getToken";
import {axiosRequest} from "../../utils/Request/newAxiosRequest";
import {Link} from "react-router-dom";

const MovieHistoryCard = ({id}) => {
    const [watchHistory, setWatchHistory] = useState<IMovie>(null);

    console.log(id)

    useEffect(() => {
        const getMoviesHistory: any = async () => {
            window.scrollTo(0, 0);
            await axiosRequest.get(`/movie/getMovie/${id.movieId.toString()}`)
                .then(res => {
                    setWatchHistory(res.data)
                })
        }
        getMoviesHistory();
    }, [id])

    return (
        <div className='movie-history-card'>
            {<Link to={`/film/${id.movieId}`} className='link'>
                {
                    watchHistory &&
                    <div className="movie-history-card-container">
                        <img
                            src={watchHistory.posterImg}
                            alt=""
                        />
                        <div className="movie-history-card-container-div">
                            <span className='movie-history-card-span'>Название фильма</span>
                            <span>{watchHistory.title}</span>
                        </div>
                        <div className="movie-history-card-container-div">
                            <span className='movie-history-card-span'>Дата посещения</span>
                            <span>{id.date}</span>
                        </div>
                    </div>
                }
            </Link>
            }
        </div>
    );
};

export default MovieHistoryCard;