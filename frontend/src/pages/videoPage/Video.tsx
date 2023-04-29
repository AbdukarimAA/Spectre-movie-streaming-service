import React, {useEffect, useRef, useState} from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Link, useParams} from "react-router-dom";
import ReactPlayer from 'react-player';
import {getOneMovie} from "../../store/slices/movieSlice/movieSlice";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {getMoviesSelector} from "../../store/slices/movieSlice/movieSelectors";
import "./Video.scss";
import Loader from "../../components/Loader/Loader";

const Video = () => {
    const [spinner, setSpinner] = useState(false);
    const [onProgress, setOnProgress] = useState({
        played: '',
        playedSeconds: 10,
        loaded: '',
        loadedSeconds: ''
    });
    const {oneMovie}: any = useAppSelector(getMoviesSelector);
    const dispatch = useAppDispatch();
    const {id} = useParams();


    useEffect(() => {
        const getOneFilm: any = async () => {
            window.scrollTo(0,0);
            setSpinner(true);
            await dispatch<any>(getOneMovie({id})).finally(() => setSpinner(false))
        }
        // if(onProgress.playedSeconds !== 0) {
        //     alert('do you want continue watch?')
        // }
        getOneFilm();
    }, []);

    if (spinner) return <Loader />;
    console.log(onProgress)

    return (
        <div className="player">
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
                    width='90%'
                    height='90%'
                    playing={false}
                    muted={true}
                    onProgress={(e: any) => setOnProgress(e)}
                    controls={true} loop={true}/>
                </div>
            }
        </div>
    );
};

export default Video;

//'//cdp.playfamily.ru/data/sid/99999999-1679347712-APU8KEl_gEoCdtUsYY6o0g/storage38/trl/5fcf5ded-b330-4d70-acfd-a99141bb4b76.webm'