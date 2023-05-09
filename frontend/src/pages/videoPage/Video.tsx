import {getMoviesSelector} from "../../store/slices/movieSlice/movieSelectors";
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {getOneMovie} from "../../store/slices/movieSlice/movieSlice";
import {authSelector} from "../../store/slices/authSlice/selectors";
import {getCurrentUser} from "../../utils/getCurrentUser/getToken";
import {getOneUser} from "../../store/slices/authSlice/authSlice";
import {axiosRequest} from "../../utils/Request/newAxiosRequest";
import {useAppDispatch, useAppSelector} from "../../hooks";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ModalWindow from "../../components/modal/Modal";
import Loader from "../../components/Loader/Loader";
import {Link, useNavigate, useParams} from "react-router-dom";
import ReactPlayer from 'react-player';
import "./Video.scss";

const Video = () => {
    const [spinner, setSpinner] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [onProgress, setOnProgress] = useState({
        played: '',
        playedSeconds: '',
        loaded: '',
        loadedSeconds: ''
    });
    const navigate = useNavigate();
    const {oneMovie}: any = useAppSelector(getMoviesSelector);
    const {user}: any = useAppSelector(authSelector);
    const dispatch = useAppDispatch();
    const {id} = useParams();
    const currentUser = getCurrentUser();
    const playerRef = useRef(null);

    useEffect(() => {
        const getOneFilm: any = async () => {
            window.scrollTo(0,0);
            setSpinner(true);
            await dispatch<any>(getOneMovie({id})).finally(() => setSpinner(false))
            await dispatch<any>(getOneUser({userId: currentUser._id})).finally(() => setSpinner(false))
        }
        getOneFilm();
    }, []);

    // useEffect(() => {
    //     const handleBackButton = async () => {
    //         await axiosRequest.post(`user/saveWatchTime/${currentUser._id}`, {movieId: id, timeStopped: onProgress && onProgress.playedSeconds})
    //         console.log('Кнопка "назад" была нажата');
    //     };
    //
    //     window.history.pushState(null, null, window.location.pathname);
    //     window.addEventListener('popstate', handleBackButton);
    //     return () => {
    //         window.removeEventListener('popstate', handleBackButton);
    //
    //     };
    // }, [onProgress.playedSeconds]);

    const watchlistItem: any = user.user && user.user.watchList && user.user.watchList.find((item: any) => item!.movieId.toString() === id);

    const handlePause: any = async () => {
        await axiosRequest.post(`user/saveWatchTime/${currentUser._id}`, {movieId: id, timeStopped: onProgress.playedSeconds})
    }

    // useEffect(() => {
    //     handlePause()
    // }, [onProgress.playedSeconds])

    // setInterval(() => {
    //     handlePause()
    // // }, 10000)

    setTimeout(() => {
        handlePause()
    }, 1000)
    const handleStartFromScratch = async () => {
        await axiosRequest.put(`user/startMovie/${currentUser._id}`, {movieId: id})
    }

    const handleResume = async () => {
        await axiosRequest.put(`user/resumeMovie/${currentUser._id}`, {movieId: id})
    }

    if (spinner) return <Loader />;

    return (
        <div className="player">
            {
                watchlistItem ? <ModalWindow movieId={id} pRef={playerRef} wL={watchlistItem}/> : ''
            }
            <Link to={`/film/${id}`}>
                <div className="back" onClick={handlePause}>
                    <ArrowBackIcon />
                    Back
                </div>
            </Link>
            {oneMovie.movie &&
                <div className="player-video">
                    <ReactPlayer
                        url={oneMovie.movie.video}
                        className="react-player"
                        ref={playerRef}
                        playing={false}
                        width='90%'
                        height='90%'
                        muted={true}
                        onProgress={(e: any) => setOnProgress(e)}
                        controls={true}
                        loop={true}
                        onStart={handleStartFromScratch}
                        onPlay={handleResume}
                        onPause={handlePause}
                    />
                </div>
            }
        </div>
    );
};

export default Video;

//'//cdp.playfamily.ru/data/sid/99999999-1679347712-APU8KEl_gEoCdtUsYY6o0g/storage38/trl/5fcf5ded-b330-4d70-acfd-a99141bb4b76.webm'