import LikedMoviesCard from "../../components/likedMoviesCard/LikedMoviesCard";
import React, {useEffect, useState} from 'react';
import './LikedMoviesPage.scss';
import {useAppDispatch, useAppSelector} from "../../store/redux-hook";
import {authSelector} from "../../store/slices/authSlice/selectors";
import {getOneUser} from "../../store/slices/authSlice/authSlice";
import {getCurrentUser} from "../../utils/getCurrentUser/getToken";
import {IUserRegister} from "../../utils/types/userRegisterType";
import Loader from "../../components/Loader/Loader";

const LikedMoviesPage = () => {
    const {user}: IUserRegister | any = useAppSelector(authSelector)
    const [spinner, setSpinner] = useState(false);
    const dispatch = useAppDispatch();
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
        <div className='liked-movies-page'>
            {
                user.user && <div className="liked-movies-page-container">
                    {
                        user.user.likedMovies && user.user.likedMovies.length !== 0 ? user.user.likedMovies.map(movie => (
                            <LikedMoviesCard key={movie.id} id={movie}/>
                        )) : <span className='liked-movies-page-container-span'>У вас еще нет сохраненных фильмов</span>
                    }
                </div>
            }
        </div>
    );
};

export default LikedMoviesPage;