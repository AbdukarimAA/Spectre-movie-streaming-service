import React, {useEffect, useState} from 'react';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import HideSourceIcon from '@mui/icons-material/HideSource';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import {hrHR} from "@mui/material/locale";
import './HomeFilmsCard.scss';

const HomeFilmsCard = ({film}) => {
    const [activeFirst, setActiveFirst] = useState<boolean>(false);
    const [activeSecond, setActiveSecond] = useState<boolean>(false);
    const [activeThird, setActiveThird] = useState<boolean>(false);
    const [activeFour, setActiveFour] = useState<boolean>(false);

    // const handleActive = () => {
    //     window.addEventListener('mouseenter', () => {
    //         setActive(true);
    //     })
    //
    // }
    //
    // const handleActiveRemove = () => {
    //     window.addEventListener('mouseleave', () => {
    //         setActive(false);
    //     })
    // }
    //
    // useEffect(() => {
    //     handleActive();
    //     handleActiveRemove();
    // }, [])

    // console.log(activeFirst)
    return (
        <div className='home-films-card'>
            <div className="h-f-carousel-container">
                <div className="h-f-container">
                    <div className="h-f-img">
                        <div className="h-f-card-div">
                            <img src={film.mainImg} alt=""/>
                            <div className="h-f-card-buttons">
                                <div className={activeFirst ? "h-f-card-buttons-container active" : "h-f-card-buttons-container"} onMouseEnter={() => setActiveFirst(true)} onMouseLeave={() => setActiveFirst(false)}>
                                    <div className="h-f-card-b-c-logo">
                                        <BookmarkBorderIcon className='h-f-card-button-logo' onMouseEnter={() => setActiveFirst(true)} onMouseLeave={() => setActiveFirst(false)}/>
                                    </div>
                                </div>
                                <div className={activeSecond ? "h-f-card-buttons-container active" : "h-f-card-buttons-container"} onMouseEnter={() => setActiveSecond(true)}>
                                    <div className="h-f-card-b-c-logo">
                                        <StarBorderIcon className='h-f-card-button-logo' onMouseEnter={() => setActiveSecond(true)} onMouseLeave={() => setActiveSecond(false)}/>
                                    </div>
                                </div>
                                <div className={setActiveThird ? "h-f-card-buttons-container active" : "h-f-card-buttons-container"} onMouseEnter={() => setActiveThird(true)}>
                                    <div className="h-f-card-b-c-logo">
                                        <ShoppingBagIcon className='h-f-card-button-logo' onMouseEnter={() => setActiveThird(true)} onMouseLeave={() => setActiveThird(false)}/>
                                    </div>
                                </div>
                                <div className={activeFour ? "h-f-card-buttons-container active" : "h-f-card-buttons-container"} onMouseEnter={() => setActiveFour(true)}>
                                    <div className="h-f-card-b-c-logo">
                                        <HideSourceIcon className='h-f-card-button-logo' onMouseEnter={() => setActiveFour(true)} onMouseLeave={() => setActiveFour(false)}/>
                                    </div>
                                </div>
                            </div>
                            <div className="h-f-card-ov-info">
                                <span className='h-f-card-rating'>8,5</span>
                                <div className="h-f-card-year-country">
                                    <span className='h-f-card-year'>2012, </span>
                                    <span className='h-f-card-country'> Russia,</span>
                                </div>
                                <span className='h-f-card-duration'>101 min</span>
                            </div>
                        </div>
                        <div className="h-f-texts">
                            <span className="h-f-title">{film.mainTitle}</span>
                            <span className="h-f-price">{film.mainPrice}</span>
                        </div>
                    </div>
                </div>
            </div>

            {activeFirst && (
                <>
                    <div className="h-f-c-logo-1" >
                        <span className='h-f-c-logo-span'>Watch later</span>
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