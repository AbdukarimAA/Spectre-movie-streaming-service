import React, {useEffect, useState} from 'react';
import './FullFilmography.scss';
import {useAppDispatch, useAppSelector} from "../../store/redux-hook";
import {getOneMovie} from "../../store/slices/movieSlice/movieSlice";
import {getMoviesSelector} from "../../store/slices/movieSlice/movieSelectors";
import {IMovie} from "../../utils/types/movieDataType";
import {axiosRequest} from "../../utils/Request/newAxiosRequest";
import Loader from "../Loader/Loader";
import {Link} from "react-router-dom";

const FullFilmography = ({id}) => {
    const [movie, setMovie] = useState<IMovie>();
    const [spinner, setSpinner] = useState(false);

    useEffect(() => {
        const getMovie: any = async () => {
            const res = await axiosRequest.get("/movie/getMovie/" + id)
                .then(res => setMovie(res.data))
                .finally(() => setSpinner(false))
        };
        getMovie();
    }, [id]);

    if (spinner) return <Loader />;

    return (
        <div className='full-filmography'>
            {<Link to={`/film/${id}`} className='link'>
                 {
                    movie && <div className="full-filmography-container">
                        <div className="full-filmography-container-img">
                            <img src={movie.posterImg} alt=""/>
                        </div>
                        <div className="full-filmography-container-titles">
                            <span className='full-filmography-container-titles-white'>{movie.year}</span>
                            <span className='full-filmography-container-titles-white'>{movie.title}</span>
                            <span className='full-filmography-container-titles-grey'>{movie.rating}</span>
                        </div>
                        <div className="full-filmography-container-button">
                            <button>Watch</button>
                        </div>
                    </div>
                }
            </Link>}
        </div>
    );
};

export default FullFilmography;