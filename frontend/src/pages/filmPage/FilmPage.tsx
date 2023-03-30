import React, {useEffect, useRef, useState} from 'react';
import ReviewsCardSlider from "../../utils/sliders/reviewsCardSlider/ReviewsCardSlider";
import FilmPageHeadings from "../../components/filmPageHeadings/FilmPageHeadings";
import ActorsSliderCard from "../../components/actorsSliderCard/ActorsSliderCard";
import HomeFilmsSlider from "../../utils/sliders/homeFilmsSlider/HomeFilmsSlider";
import HomeFilmsCard from "../../components/homeFilmsCard/HomeFilmsCard";
import {SubmitButton} from "../../utils/customButton/CustomButton";
import ActorsSlider from "../../utils/sliders/actorsSlider/ActorsSlider";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ReviewsCard from "../../components/reviewsCards/ReviewsCard";
import {Avatar, Button, Rating, Typography} from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import MicNoneIcon from '@mui/icons-material/MicNone';
import TextField from '@mui/material/TextField';
import {filmCar, reviewCard} from "../../data";
import ReactPlayer from 'react-player';
import {actorCard} from "../../data";
import Box from '@mui/material/Box';
import './FilmPage.scss';

const FilmPage = () => {
    const [videoPlay, setVideoPlay] = useState<boolean | any>(false);
    const [isPlotActive, setIsPlotActive] = useState<boolean>(false);
    const [value, setValue] = useState<number | null>(2);

    const handleDescOpen = () => {
      setIsPlotActive(true)
    };

    const handleDescClose = () => {
        setIsPlotActive(false)
    };

    const handleVideoStart = () => {
        setVideoPlay(true);

    };

    const handleVideoStop = () => {
        setVideoPlay(false);
        // setTimeout(isTrue, 2000);
    };

    useEffect(() => {
        setTimeout(handleVideoStart, 3000)
    }, [])

    const videosURL = [
        "https://smr-cdp-r1.playfamily.ru/data/cid/99999999-1679260448-ixHMphhuPk_rkF04ePQKng/spb-cdp25/storage38/trl/5fcf5ded-b330-4d70-acfd-a99141bb4b76.webm#t=5,10",
        "https://smr-cdp-r1.playfamily.ru/data/cid/99999999-1679260448-ixHMphhuPk_rkF04ePQKng/spb-cdp25/storage38/trl/5fcf5ded-b330-4d70-acfd-a99141bb4b76.webm#t=15,25",
        "https://smr-cdp-r1.playfamily.ru/data/cid/99999999-1679260448-ixHMphhuPk_rkF04ePQKng/spb-cdp25/storage38/trl/5fcf5ded-b330-4d70-acfd-a99141bb4b76.webm#t=35,45",
        "https://smr-cdp-r1.playfamily.ru/data/cid/99999999-1679260448-ixHMphhuPk_rkF04ePQKng/spb-cdp25/storage38/trl/5fcf5ded-b330-4d70-acfd-a99141bb4b76.webm#t=55,65"
    ];

    let getRandomFragmentOfVideo = Math.floor(Math.random() * videosURL.length);

    return (
        <div className='film-page' >
            <div className="film-page-main-img"
                 onMouseEnter={() => setTimeout(handleVideoStart, 3000)}
                 // onMouseLeave={() => setTimeout(handleVideoStop, 3000)}
            >
                <div className="film-page-main-img-div"
                     // onMouseEnter={() => setTimeout(handleVideoStart, 3000)}
                     // onMouseLeave={() => setTimeout(handleVideoStop, 3000)}
                     onEnded={handleVideoStop}
                >
                    {
                        !videoPlay ? <img className='film-p-main-pic' src="https://mobimg.b-cdn.net/v3/fetch/0b/0b24baf00aa7825a934c50b5f9af8dbd.jpeg" alt=""/> :
                            // <video src="//cdp.playfamily.ru/data/sid/99999999-1679347712-APU8KEl_gEoCdtUsYY6o0g/storage38/trl/5fcf5ded-b330-4d70-acfd-a99141bb4b76.webm" autoPlay muted/>
                            <ReactPlayer url='//cdp.playfamily.ru/data/sid/99999999-1679347712-APU8KEl_gEoCdtUsYY6o0g/storage38/trl/5fcf5ded-b330-4d70-acfd-a99141bb4b76.webm' playing={true} muted={true} width='100%' height='100%'/>
                    }
                </div>
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
                <div className="film-p-linear-top"></div>
                <div className="film-p-linear-bottom"></div>
                <div className="film-p-linear-bottom-connect"></div>
            </div>

            <FilmPageHeadings text='Description'/>
            <div className="film-page-desc-section">
                <div className="film-p-desc-sect-left">
                    <div className="film-p-desc-sect-left-up">
                        Ремейк всеми любимого мультфильма о львенке Симбе от Джона Фавро (Книга Джунглей). Рисованные жители саванны переносятся в виртуальную реальность! Любимые герои оживают на глазах и самая трогательная история, кажется, становится еще более правдивой. Безупречно красивое возрождение легенды мультипликации.
                    </div>
                    <div className="film-p-desc-sect-left-down">
                        <b className='film-p-desc-sect-left-down-main-span'>Plot</b>
                        <span className={!isPlotActive ? 'film-p-desc-sect-left-down-open' : 'film-p-desc-sect-left-down-open active'} onClick={handleDescOpen}>
                            {
                                !isPlotActive ?
                                    <span className='film-p-desc-sect-left-down-open-span'>
                                        Detailed description
                                    </span> :
                                    <div className='film-p-desc-sect-left-down-open-exact-info'>
                                        <span className='film-p-desc-sect-left-down-open-exact-info-span'>
                                            Мудрый и великий король Лев Муфаса является правителем больших и плодородных земель. Его уважает и любит всёзвериное племя: от мала до велика. И вот в королевской семье рождается маленький львенок, имя которого - Симба.Родители устраивают церемонию, на которую почтить будущего короля пришел каждый.
                                        </span>
                                    </div>
                            }
                        </span>
                        {
                            isPlotActive ?
                                <span className='film-p-desc-sect-left-down-close-span' onClick={handleDescClose}>
                                    Roll description up
                                </span> : !isPlotActive
                        }
                    </div>
                </div>
                <div className="film-p-desc-sect-right">
                    <div className="film-p-desc-sect-right-div">
                        <span className='film-p-desc-sect-right-div-span'>Leave your feedback</span>
                        <span className='film-p-desc-sect-right-div-sp'>Ratings improve recommendations</span>
                        <Box className='box-test' sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            {/*<AccountCircle sx={{ color: 'action.active', mr: 1, my: 2.5, fontSize: '2.5rem'}} />*/}
                            <div className="av-test">
                                <Avatar alt="Remy Sharp" src="" sx={{fontSize: '2.5rem', mr: 2}} />
                                <TextField
                                    id="outlined-multiline-flexible"
                                    label="Your Review"
                                    multiline
                                    margin={"normal"}
                                    maxRows={2}
                                />
                            <Typography component="legend" />
                            <Rating
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                            />
                            </div>
                                <Button variant="contained" sx={{m:2}}>Publish</Button>
                        </Box>
                    </div>
                </div>
            </div>

            <FilmPageHeadings text='Trailer'/>

            <div className="film-page-trailer">
                <video
                    src='//cdp.playfamily.ru/data/sid/99999999-1679347712-APU8KEl_gEoCdtUsYY6o0g/storage38/trl/5fcf5ded-b330-4d70-acfd-a99141bb4b76.webm'  controls
                />
            </div>

            <FilmPageHeadings text='Similar'/>

            <HomeFilmsSlider
                slidesToShow={6}
                arrowsScroll={3}
                initialSlide={true}
                arrowsBlock={false}
            >
                {
                    filmCar.map(item => (
                        <HomeFilmsCard key={item.id} film={item}/>
                    ))
                }
            </HomeFilmsSlider>

            <FilmPageHeadings text='In collections'/>

            <HomeFilmsSlider
                slidesToShow={6}
                arrowsScroll={3}
                initialSlide={true}
                arrowsBlock={false}
            >
                {
                    filmCar.map(item => (
                        <HomeFilmsCard key={item.id} film={item}/>
                    ))
                }
            </HomeFilmsSlider>

            <FilmPageHeadings text='Reviews and feedbacks'/>

            <ReviewsCardSlider
                slidesToShow={2}
                arrowsScroll={2}
                initialSlide={true}
                arrowsBlock={false}
                centerPadding={70}
                duration={300}
                shift={0}
            >
                {
                    reviewCard.map((review) => (
                        <ReviewsCard review={review} key={review.id}/>
                    ))
                }
            </ReviewsCardSlider>

            <FilmPageHeadings text='Movie crew'/>

            <ActorsSlider
                slidesToShow={6}
                arrowsScroll={3}
                initialSlide={true}
                arrowsBlock={false}
            >
                {
                    actorCard.map((actor) => (
                        <ActorsSliderCard actor={actor} key={actor.id}/>
                    ))
                }
            </ActorsSlider>

            <hr/>

            <div className="film-page-foot-info">
                <div className="film-page-foot-info-container">
                    <div className="film-page-foot-info-div">
                        <span className='f-p-foot-title'>Information</span>
                        <br/>
                        <span className='f-p-foot-span'>Country</span>
                        <span>USA</span>
                        <br/>
                        <span className='f-p-foot-span'>Genre</span>
                        <span>Action</span>
                        <br/>
                        <span className='f-p-foot-span'>Original title</span>
                        <span>Lion King</span>
                        <br/>
                        <span className='f-p-foot-span'>Release date</span>
                        <span>11 Jan 2023</span>
                    </div>
                    <div className="film-page-foot-crew-div">
                        <span className='f-p-foot-title'>Crew</span>
                        <br/>
                        <span className='f-p-foot-span'>Director</span>
                        <span>George Lucas</span>
                        <br/>
                        <span className='f-p-foot-span'>Actors</span>
                        <span>Джерард Батлер, Майк Колтер, Тони Голдуин, Йосон Ань, Ивэн Дэйн Тейлор, Пол Бен-Виктор, Даниэлла Пинеда, Лилли Круг, Келли Гейл, Отис Уинстон, Энджел Фабиан Ривера, Модесто Ласен, Джои Злотник, Роуз Ишэй, Рики Роблз Крус, Джессика Нэм, Куинн Макферсон, Оливер Тревена, Тара Вествуд, Мишель Ли, Эмбер Ривера, Джон Дж. Шим, Кларо Де Лос Рейс, Реми Аделеке, Мэтт Кук, Джеймс Ли, Хезер Шайфферт, Хэли Хеккинг, Джереми Денцлингер, Джефф Франциско, Эриель Феликс, Ник Брэндон, Мишель Кортес, Джеффри Хольсман, Кейт Биссет, Кейт Рачески, Томас Каррен, Саиф Мосен</span>
                        <br/>
                        <span className='f-p-foot-span'>Producers</span>
                        <span>Джерард Батлер, Лоренцо Ди Бонавентура, Ник Бауэр, Аластер Берлинэм, Марк Бутан, Дж.П. Дэвис, Виктория Ди, Мэтью Данн, Эдвард Фи, Кристиан Гьюдгэст, Дэниэл Каслоу, Тим Ли, Дипак Наяр, Осита О, Гари Раскин, Даниэль Робинсон, Мими Роуд, Луильо Руис, Алан Сигел, Марк Вахрадян</span>
                        <br/>
                        <span className='f-p-foot-span'>Screenwriters</span>
                        <span>Gerard Butler</span>
                        <br/>
                        <span className='f-p-foot-span'>Operators</span>
                        <span>Gerard Butler</span>
                    </div>
                    <div className="film-page-foot-sound">
                        <span className='f-p-foot-title'>Sound and Subtitles</span>
                        <br/>
                        <span className='f-p-foot-span'>Audio Track</span>
                        <span>Russian</span>
                        <br/>
                        <span className='f-p-foot-span'>Quality</span>
                        <span>SD, HD, FHD</span>
                    </div>
                </div>
            </div>

            <hr/>
        </div>
    );
};

export default FilmPage;