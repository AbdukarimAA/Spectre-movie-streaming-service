import React, {useRef, useState} from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./Video.scss";
import {Link} from "react-router-dom";
import { findDOMNode } from 'react-dom'
import ReactPlayer from 'react-player';

const Video = () => {

    return (
        <div className="player">
            <Link to="/">
                <div className="back">
                    <ArrowBackIcon />
                    Home
                </div>
            </Link>
            <div className="player-video">
                <ReactPlayer url='//cdp.playfamily.ru/data/sid/99999999-1679347712-APU8KEl_gEoCdtUsYY6o0g/storage38/trl/5fcf5ded-b330-4d70-acfd-a99141bb4b76.webm' className="react-player" width='90%' height='90%'  playing={false} muted={true} controls={true} loop={true}/>
            </div>
        </div>
    );
};

export default Video;