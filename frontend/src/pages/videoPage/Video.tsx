import React, {useCallback, useEffect, useRef, useState} from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Link, useParams} from "react-router-dom";
import ReactPlayer from 'react-player';
import {getOneMovie} from "../../store/slices/movieSlice/movieSlice";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {getMoviesSelector} from "../../store/slices/movieSlice/movieSelectors";
import "./Video.scss";
import Loader from "../../components/Loader/Loader";
import {getCurrentUser} from "../../utils/getCurrentUser/getToken";
import ModalWindow from "../../components/modal/Modal";
import {axiosRequest} from "../../utils/Request/newAxiosRequest";
import {getOneUser} from "../../store/slices/authSlice/authSlice";
import {authSelector} from "../../store/slices/authSlice/selectors";

const Video = () => {
    const [isReady, setIsReady] = useState(false);
    const [spinner, setSpinner] = useState(false);
    const [onProgress, setOnProgress] = useState({
        played: '',
        playedSeconds: '',
        loaded: '',
        loadedSeconds: ''
    });
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

    const watchlistItem: any = user.user && user.user.watchList && user.user.watchList.find((item: any) => item!.movieId.toString() === id);

    const handlePause = async () => {
        await axiosRequest.post(`user/saveWatchTime/${currentUser._id}`, {movieId: id, timeStopped: onProgress.playedSeconds})
    }

    const handleStartFromScratch = async () => {
        await axiosRequest.put(`user/startMovie/${currentUser._id}`, {movieId: id})
    }

    const handleResume = async () => {
        await axiosRequest.put(`user/resumeMovie/${currentUser._id}`, {movieId: id})
    }

    // const onReady = useCallback(() => {
    //     if (!isReady && watchlistItem) {
    //         let test = watchlistItem && (watchlistItem.timeStopped / 60)
    //         const timeToStart: number = Math.round(test) * 60;
    //         playerRef.current.seekTo(timeToStart, "seconds");
    //         setIsReady(true);
    //     }
    // }, [isReady]);

    if (spinner) return <Loader />;

    return (
        <div className="player">
            {
                watchlistItem ? <ModalWindow movieId={id} pRef={playerRef} wL={watchlistItem}/> : ''
            }
            <Link to={`/film/${id}`}>
                <div className="back">
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
                        // onReady={onReady}
                    />
                </div>
            }
        </div>
    );
};

export default Video;

//'//cdp.playfamily.ru/data/sid/99999999-1679347712-APU8KEl_gEoCdtUsYY6o0g/storage38/trl/5fcf5ded-b330-4d70-acfd-a99141bb4b76.webm'