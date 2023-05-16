import React, {useEffect, useState} from 'react';
import './MovieHistoryPage.scss';
import MovieHistoryCard from "../../components/movieHistoryCard/MovieHistoryCard";
import {IUserRegister} from "../../utils/types/userRegisterType";
import {useAppDispatch, useAppSelector} from "../../store/redux-hook";
import {authSelector} from "../../store/slices/authSlice/selectors";
import {getCurrentUser} from "../../utils/getCurrentUser/getToken";
import {getOneUser} from "../../store/slices/authSlice/authSlice";
import Loader from "../../components/Loader/Loader";

const MovieHistoryPage = () => {
    const [spinner, setSpinner] = useState(false);
    const dispatch = useAppDispatch();
    const {user}: IUserRegister | any = useAppSelector(authSelector)
    const currentUser = getCurrentUser();

    useEffect(() => {
        const getLikedMoviesFunc: any = () => {
            setSpinner(true);
            dispatch<any>(getOneUser({userId: currentUser._id})).finally(() => setSpinner(false))
        }
        getLikedMoviesFunc();
    }, [])

    if (spinner) return <Loader />;

    return (
        <div className='movie-history-page'>
            { user.user && <div className="movie-history-page-container">
                    {
                        user.user.watchMovieHistory && user.user.watchMovieHistory.length !== 0 ? user.user.watchMovieHistory.map(movie => (
                            <MovieHistoryCard key={movie.id} id={movie}/>
                        )) : <span className='liked-movies-page-container-span'>У вас еще нет истории фильмов</span>
                    }
                </div>
            }
        </div>
    );
};

export default MovieHistoryPage;