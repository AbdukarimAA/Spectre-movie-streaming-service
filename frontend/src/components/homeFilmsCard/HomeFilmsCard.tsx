import React, {useEffect, useState} from 'react';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import HideSourceIcon from '@mui/icons-material/HideSource';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import './HomeFilmsCard.scss';
import {axiosRequest} from "../../utils/Request/newAxiosRequest";
import {Link, useNavigate} from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";
import {IMovie} from "../../utils/types/movieDataType";
import {useAppDispatch, useAppSelector} from "../../store/redux-hook";
import {addLikedMovies, getOneUser} from "../../store/slices/authSlice/authSlice";
import {getCurrentUser} from "../../utils/getCurrentUser/getToken";
import {authSelector} from "../../store/slices/authSlice/selectors";

const HomeFilmsCard = ({film}: any) => {
    const [activeFirst, setActiveFirst] = useState<boolean>(false);
    const [activeSecond, setActiveSecond] = useState<boolean>(false);
    const [activeThird, setActiveThird] = useState<boolean>(false);
    const [activeFour, setActiveFour] = useState<boolean>(false);
    const [movie, setMovie] = useState<IMovie>();
    const [spinner, setSpinner] = useState(false);
    const [test, setTest] = useState<any>('');
    const {user} = useAppSelector(authSelector);
    const dispatch = useAppDispatch()
    const currentUser = getCurrentUser();

    useEffect(() => {
        const getMovie: any = async () => {
            setSpinner(true)
            await axiosRequest.get("/movie/getMovie/" + film)
                .then(res => setMovie(res.data))
                .finally(() => setSpinner(false))
        };
        getMovie();
    }, [film])

    useEffect(() => {
        const getUser: any = async () => {
            setSpinner(true)
            await axiosRequest.get("/user/getUser/" + currentUser._id)
                .then(res => setTest(res.data))
                .finally(() => setSpinner(false))
        };
        getUser();
    }, [])

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        // check(movie._id)
        await dispatch<any>(addLikedMovies({userId: currentUser._id, movieId: movie._id}));
        alert('Movie has been added to the list of favorites')
    }

    // let a = true

    // test && test.likedMovies.map(item => {
    //     if(item === movie && movie._id) {
    //         a = false
    //     }
    // })
    // let a = test && test.likedMovies.find(item => item === '64579507f4fbf4670c967853')
    // console.log(a)
    if (spinner) return <LinearProgress />;

    return (
        <div className='home-films-card'>
            <div className="h-f-carousel-container">
                {movie && <Link className='Link' to={`/film/${movie._id}`}>
                    <div className="h-f-container">
                        {<div className="h-f-img">
                            <div className="h-f-card-div">
                                <img src={movie.posterImg} alt=""/>
                                <div className="h-f-card-buttons">
                                    <div
                                        className={activeFirst ? "h-f-card-buttons-container active" : "h-f-card-buttons-container"}
                                        onMouseEnter={() => setActiveFirst(true)}
                                        onMouseLeave={() => setActiveFirst(false)}>
                                        {
                                            <div className="h-f-card-b-c-logo">
                                                <BookmarkBorderIcon
                                                    className='h-f-card-button-logo'
                                                    onClick={handleSubmit}
                                                    onMouseEnter={() => setActiveFirst(true)}
                                                    onMouseLeave={() => setActiveFirst(false)}/>
                                            </div>
                                        }
                                    </div>
                                    <div
                                        className={activeSecond ? "h-f-card-buttons-container active" : "h-f-card-buttons-container"}
                                        onMouseEnter={() => setActiveSecond(true)}>
                                        <div className="h-f-card-b-c-logo">
                                            <StarBorderIcon
                                                className='h-f-card-button-logo'
                                                onMouseEnter={() => setActiveSecond(true)}
                                                onMouseLeave={() => setActiveSecond(false)}/>
                                        </div>
                                    </div>
                                    <div
                                        className={setActiveThird ? "h-f-card-buttons-container active" : "h-f-card-buttons-container"}
                                        onMouseEnter={() => setActiveThird(true)}>
                                        <div className="h-f-card-b-c-logo">
                                            <ShoppingBagIcon
                                                className='h-f-card-button-logo'
                                                onMouseEnter={() => setActiveThird(true)}
                                                onMouseLeave={() => setActiveThird(false)}/>
                                        </div>
                                    </div>
                                    <div
                                        className={activeFour ? "h-f-card-buttons-container active" : "h-f-card-buttons-container"}
                                        onMouseEnter={() => setActiveFour(true)}>
                                        <div className="h-f-card-b-c-logo">
                                            <HideSourceIcon
                                                className='h-f-card-button-logo'
                                                onMouseEnter={() => setActiveFour(true)}
                                                onMouseLeave={() => setActiveFour(false)}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-f-card-ov-info">
                                    <span className='h-f-card-rating'>{movie.rating}</span>
                                    <div className="h-f-card-year-country">
                                        <span className='h-f-card-year'>{movie.year}, </span>
                                        <span className='h-f-card-country'> {movie.country},</span>
                                    </div>
                                    <span className='h-f-card-duration'>{movie.duration}</span>
                                </div>
                            </div>
                            <div className="h-f-texts">
                                <span className="h-f-title">{movie.title}</span>
                                <span className="h-f-price">{movie.genre}</span>
                            </div>
                        </div>}
                    </div>
                </Link>}
            </div>

            {activeFirst && (
                <>
                    <div className="h-f-c-logo-1" >
                        <span className='h-f-c-logo-span'>Favorite</span>
                    </div>
                </>
            )}

            {activeSecond && (
                <>
                    <div className="h-f-c-logo-2" >
                        <span className='h-f-c-logo-span'>Similar</span>
                    </div>
                </>
            )}

            {activeThird && (
                <>
                    <div className="h-f-c-logo-3" >
                        <span className='h-f-c-logo-span'>Purchase</span>
                    </div>
                </>
            )}

            {activeFour && (
                <>
                    <div className="h-f-c-logo-4" >
                        <span className='h-f-c-logo-span'>Dislike</span>
                    </div>
                </>
            )}
        </div>
    );
};

export default HomeFilmsCard;