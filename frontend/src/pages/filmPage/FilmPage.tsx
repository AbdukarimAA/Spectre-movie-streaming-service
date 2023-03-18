import React, {useState} from 'react';
import MicNoneIcon from '@mui/icons-material/MicNone';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import './FilmPage.scss';
import {SubmitButton} from "../../components/customButton/CustomButton";


const FilmPage = () => {

    return (
        <div className='film-page'>
            <div className="film-page-main-img">
                <img className='film-p-main-pic' src="https://mobimg.b-cdn.net/v3/fetch/0b/0b24baf00aa7825a934c50b5f9af8dbd.jpeg" alt=""/>
                <div className="film-p-linear"></div>
                <div className="film-p-pic-info">
                    <img className='film-p-main-pic-title' src="https://i.amediateka.tech/trim/640x320/_stor_/cms/content-contentasset/a/02/a91e480c231f516dd004f14cb6baca02-124060-f90c010572714976b72fbf098ecf8646.png" alt=""/>
                    <div className="film-p-pic-exact-info">
                        <button className='film-p-pic-rating'>7,7</button>
                        <span className='film-p-pic-year'>2023</span>
                        <span className='film-p-pic-type'>Family movie</span>
                        <span className='film-p-pic-duration'>1h 53m</span>
                        <MicNoneIcon />
                        <span className='film-p-pic-lang'>Rus</span>
                        <span className='film-p-pic-limit'>6+</span>
                    </div>
                    <div className="film-p-pic-desc">
                        <span>
                            Маленький любитель апельсинов учится шахматам и дружить. Возвращение легендарного ушастика, взорвавшее прокат
                        </span>
                    </div>
                    <div className="film-p-pic-director">
                        <span className='film-p-pic-d'>Director </span>
                        :
                        <span className='film-p-pic-d-name'> George Lucas</span>
                    </div>
                    <div className="film-p-pic-actors-crew">
                        <span className='film-p-pic-a'>Actors </span>
                        :
                        <span className='film-p-pic-a-names'> Сергей Гармаш</span>
                    </div>
                    <div className="film-p-pic-advert">
                        <span className='film-p-pic-advert-main'>Месяц за 1 ₽, затем месяц за 199 ₽</span>
                        <span className='film-p-pic-ad'> в подписке Оптимум</span>
                    </div>
                    <div className="film-p-pic-buttons">
                        <SubmitButton text={'Subscribe'} className='film-p-pic-button-purchase' />
                        <button className='film-p-pic-button-trailer'>Trailer</button>
                        <BookmarkBorderIcon className='film-p-pic-button-icon'/>
                    </div>
                </div>
            </div>
            <div className="film-page-choose-sect">
                <span>Description</span>
                <span>Viewing options</span>
            </div>
            <hr />
            <div className="film-page-desc-section">
                <div className="film-p-desc-sect-left">
                    fsfdsfs
                </div>
                <div className="film-p-desc-sect-right">
                    fdsfdsfds
                </div>
            </div>
        </div>
    );
};

export default FilmPage;