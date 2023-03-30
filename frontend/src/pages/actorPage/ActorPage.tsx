import React, {useState} from 'react';
import './ActorPage.scss';
import {actorCard, actorPageCard, filmCar} from "../../data";
import HomeFilmsCard from "../../components/homeFilmsCard/HomeFilmsCard";
import HomeFilmsSlider from "../../utils/sliders/homeFilmsSlider/HomeFilmsSlider";
import ActorsSliderCard from "../../components/actorsSliderCard/ActorsSliderCard";
import ActorsSlider from "../../utils/sliders/actorsSlider/ActorsSlider";
import ActorPageSlider from "../../utils/sliders/actorPageSlider/ActorPageSlider";
import ActorPageSliderCard from "../../components/actorPageSliderCard/ActorPageSliderCard";
import FullFilmography from "../../components/fullFilmography/FullFilmography";

const ActorPage = () => {
    const [isDescActive, setIsDescActive] = useState<boolean>(false);
    const [isBioActive, setIsBioActive] = useState<boolean>(false);

    const handleBioOpen = () => {
        setIsBioActive(true)
    };

    const handleBioClose = () => {
        setIsBioActive(false)
    };

    const handleDescOpen = () => {
        setIsDescActive(true)
    };

    const handleDescClose = () => {
        setIsDescActive(false)
    };

    return (
        <div className='actor-page'>
            <div className="test">
                <div className="actor-page-test">
                    <div className="actor-page-img">
                        <div className="actor-page-linear-left"></div>
                        <div className="actor-page-linear-bottom"></div>
                        <div className="actor-page-linear-right"></div>
                        <img src="https://i.pinimg.com/originals/3b/9d/8e/3b9d8ed813114e6d9f02dbb2ba7abcca.jpg" alt=""/>
                    </div>
                </div>
            </div>
            <div className="actor-page-info">
                <div className="actor-page-info-container">
                    <span className='actor-page-first-span'>Gerard Butler</span>
                    <span className='actor-page-main-span'>Gerard Butler</span>
                    <span className='actor-page-desc' onClick={handleDescOpen}>
                        {
                            !isDescActive ?
                                <div className='actor-page-open-span-div'>
                                    <span className='actor-page-open-span'>
                                        Biography
                                    </span>
                                </div> :
                                <div className='actor-page-exact-info'>
                                    <span className='actor-page-exact-info-span'>
                                        Джерард Батлер (Gerard Butler) — знаменитый шотландский актёр, прославившийся ролями в разножанровых фильмах, таких, как «Дракула 2000», «Власть огня», «Лара Крофт: Расхитительница гробниц 2 — Колыбель жизни», «Призрак Оперы», «Выкуп», «300 спартанцев», «Рок-н-рольщик», «Голая Правда», «Геймер», «Законопослушный гражданин», «Охотник за головами», «Проповедник с пулемётом», «Падение Олимпа», «Боги Египта», «Геошторм», «Хантер Киллер», «Исчезновение», «Гренландия».
                                    </span>
                                </div>
                        }
                    </span>
                    {
                        isDescActive ?
                            <span className='actor-page-close-span' onClick={handleDescClose}>
                                Roll description up
                            </span> : !isDescActive
                    }
                    <span className='actor-page-movies-count'>59 фильмов</span>
                    <span className='actor-page-slider-span'>Главные фильмы</span>

                    <ActorPageSlider
                        slidesToShow={3}
                        arrowsScroll={3}
                        initialSlide={true}
                        arrowsBlock={false}
                    >
                        {
                            actorPageCard.map(item => (
                                <ActorPageSliderCard key={item.id} info={item}/>
                            ))
                        }
                    </ActorPageSlider >

                    <span className='actor-page-slider-span'>Главные фильмы</span>

                    {
                        actorPageCard.map(film => (
                            <FullFilmography key={film.id} film={film}/>
                        ))
                    }

                    <span className='actor-page-slider-span'>Biography</span>

                    <span className='actor-page-open-span-open'>
                        Джейсон Стэйтем родился 12 сентября 1967 года в городке Честерфилд, Великобритания. Его отец был лаунж-певцом инелегальным торговцем, а мать - уличной танцовщицей. Так что детство Джейсона нельзя назвать благополучным. Позже онвспоминал, что растя в такой атмосфере, всегда можно встретить множество колоритных персонажей, чей бизнес лежит по тусторону закона, и это помогает ему играть своих персонажей. Он вырос вместе с известным футболистом Винни Джонсом,которого позже и привел в кино, да и сам Джейсон играл в футбол за школьную команду. Но его истинной страстью былипрыжки в воду. Он ежедневно тренировался, что в итоге дало свои плоды: в течение 12 лет Стэйтем входил в составбританской национальной сборной по прыжкам в воду и на чемпионате мира 1992 года занял 12-е место. Правда, в одном изинтервью он говорил, что спорт, скорее, был хобби, а зарабатывал он в то время, торгуя на уличном рынке. Кроме этого,Джейсон изучал еще и боевые искусства.
                    </span>

                    <span className='actor-page-desc' onClick={handleBioOpen}>
                        {
                            !isBioActive ?
                                <div className='actor-page-open-span-div'>
                                    <span className='actor-page-open-span'>
                                        Read Full biography
                                    </span>
                                </div> :
                                <div className='actor-page-exact-info'>
                                    <span className='actor-page-exact-info-span'>
                                            Новый виток в жизни Стэйтема начался, когда в конце девяностых один агент обратил на него внимание во время тренировки в лондонском национальном спортивном центре и предложил поучаствовать в рекламной кампании бренда Tommy Hilfiger. Так, после рекламы джинсов началась модельная карьера Джейсона. Вскоре он стал моделью бренда French Connection. Однажды судьба свела его с британским кинорежиссером Гаем Ричи, который на тот момент работал над своим первым полнометражным фильмом и подыскивал актера на роль смышленного уличного мошенника. Джейсон впечатлил режиссера своим непростым прошлым и получил заветную роль. Картину, названную «Карты, деньги, два ствола» (1998) ждал успех и множественные положительные отзывы критиков, в том числе и об актерской игре самого Стейтема.
                                            <br/>
                                        Во второй ленте Гая Ричи «Большой Куш» (2000) партнерами по фильму для Стэйтема стали такие звезды, как Бред Питт и Бенисио Дель Торо. При этом, значение персонажа Джейсона в фильме росло по мере съемок. Успех фильма и игра Стэйтема открыли ему дорогу в Голливуд, где сперва снявшись в паре не особо успешных лент, таких как «Противостояние » (2001) и «Призраки Марса» (2001), он получил роль в картине «Перевозчик» (2002), получившей хороший отклик у зрителей, после чего было принято решение снять еще два фильма в виде продолжения.До съемок во второй части «Перевозчика», Стэйтем отметиться в двух фильмах: «Ограбление по-итальянски» (2003) и «Сотовый» (2004). Роли в этих фильмах у него хоть и были второстепенными, но весьма яркими и запоминающимися. Также у Джейсона была весьма любопытное камео в фильме «Соучастник» (2004). В перерыве между съемками «Перевозчик 2» (2005) и «Перевозчик 3» (2008) Джейсон сыграл в целом ряде кинокартин, среди которых можно отметить: «Лондон» (2005), «Револьвер» (2005), «Хаос» (2005), «Адреналин» (2006), «Война» (2007), «Ограбление на Бейкер-стрит» (2007) и «Смертельная гонка» (2008). Затем он отметиться в боевике «Адреналин 2: Высокое напряжение» (2009) и триллере «Тринадцать» (2010).
                                        <br/>

                                            В 2010 году Джейсон Стэйтем сыграет одну из своих лучших ролей в боевике «Неудержимые» (2010), который известен благодаря участию огромного количества звезд боевиков. Впоследствии фильм получит еще два продолжения, в которых Стэйтем сыграет одну из главных ролей. В 2010-х годах также выйдет еще много боевиков с участием Стэйтема. Среди этих фильмов присутствуют: «Механик» (2011), «Без компромиссов» (2011), «Профессионал» (2011), «Защитник» (2012), «Паркер» (2013), «Эффект колибри» (2013), «Последний рубеж» (2013), «Шальная карта» (2015), «Шпион» (2015), «Мег: Монстр глубины» (2018). Весьма примечательной оказалась его роль в фильме «Форсаж 7» (2013), где он сыграл весьма неоднозначного персонажа Деккарда Шоу. Впоследствии этот персонаж появиться в следующей части франшизы «Форсаж», а также в спин-оффе «Форсаж: Хоббс и Шоу» (2019).

                                            Личная жизнь у актера оказалась весьма насыщенной. Он встречался со многими моделями и певицами, но в итоге обручился с моделью и актрисой Роузи Хантингтон-Уайтли.
                                    </span>
                                </div>
                        }
                    </span>
                    {
                        isDescActive ?
                            <span className='actor-page-close-span' onClick={handleBioClose}>
                                Roll Biography up
                            </span> : !isDescActive
                    }

                    <span className='actor-page-slider-span'>Reviews</span>

                    <div className="actor-page-reviews">
                        <div className="actor-page-reviews-container">
                            <div className="actor-page-reviews-container-leaved">
                                <div className="actor-page-reviews-container-leaved-top">
                                    <span>User1</span>
                                    <span>30.09.2022</span>
                                </div>
                                <div className="actor-page-reviews-container-leaved-bottom">
                                    <span>This is an amazing actor</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ActorPage;