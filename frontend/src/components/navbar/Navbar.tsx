import React, { useEffect, useState } from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {axiosRequest} from "../../utils/Request/newAxiosRequest";
import {getCurrentUser} from "../../utils/getCurrentUser/getToken";
import {useAppDispatch, useAppSelector} from "../../store/redux-hook";
import {authLogout, getOneUser} from "../../store/slices/authSlice/authSlice";
import "./Navbar.scss";
import {SearchOutlined} from "@mui/icons-material";
import Cookies from "js-cookie";
import {authSelector} from "../../store/slices/authSlice/selectors";

function Navbar() {
    const [active, setActive] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    const {user}: any = useAppSelector(authSelector)

    const { pathname } = useLocation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const currentUser = getCurrentUser();

    useEffect(() => {
        const getOneUserFunc: any = () => {
            dispatch<any | null>(getOneUser({userId: currentUser ? currentUser._id : ''}))
        }

        getOneUserFunc();
    }, [currentUser && currentUser._id])

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", isActive);
        return () => {
            window.removeEventListener("scroll", isActive);
        };
    }, []);


    const handleLogOut = async () => {
        try {
            // await axiosRequest.post('/auth/logout');
            await dispatch<any>(authLogout);
            localStorage.removeItem('currentUser');
            Cookies.remove('token')
            navigate('/');
        } catch (e) {
            console.log(e)
        }
    }

    const handleModal = () => {
        const isTrue: any = setOpen(true);
        setTimeout(isTrue, 1000);
    };

    return (
        <div className={active || pathname !== "/" || !active && pathname !== '/' ? "navbar active" : "navbar"}>
            <div className="container">
                <div className="logo">
                    <Link className="link" to="/">
                        <span className="text">Spectre</span>
                    </Link>
                    {/*<span className='navbar-links'>What's new</span>*/}
                    <Link className='link' to={'/movies'}>
                        <span className='navbar-links'>Фильмы</span>
                    </Link>
                    {/*<span className='navbar-links'>Serials</span>*/}
                    <Link className='link' to={'/cartoons'}>
                        <span className='navbar-links'>Мультфильмы</span>
                    </Link>
                    {/*<span className='navbar-links'>TV+</span>*/}
                    <Link to='/actors' className='link'>
                        <span className='navbar-links'>Актеры</span>
                    </Link>
                </div>
                <div className="links">
                    <Link to='/search' className='link'>
                        <span className='navbar-links'><SearchOutlined /></span>
                    </Link>
                    <span className='navbar-links'>Купить подписку </span>
                    {currentUser?.isAdmin &&
                        <Link to='/admin' className='link'>
                            <span>Admin</span>
                        </Link>
                    }
                    {currentUser ? (
                        <div className="user active" onMouseEnter={handleModal} onClick={()=>setOpen(!open)}>
                            <img
                                src={user.user && user.user.img || '/img/noavatar.jpg'}
                                alt=""
                            />
                            <span>{user.user && user.user.username}</span>
                            {open && <div className="options active" onMouseLeave={()=>setOpen(!open)}>
                                <div className="options-left">
                                    {/*{currentUser.isAdmin && (*/}
                                    {/*    <>*/}
                                    {/*        <Link className="link" to="/admin">*/}
                                    {/*            <div className="opt-left-item">*/}
                                    {/*                Admin*/}
                                    {/*            </div>*/}
                                    {/*        </Link>*/}
                                    {/*        <div className="opt-left-item">*/}
                                    {/*            <Link className="link" to="/">*/}
                                    {/*                Add New Film*/}
                                    {/*            </Link>*/}
                                    {/*        </div>*/}
                                    {/*    </>*/}
                                    {/*)}*/}
                                    <div className="opt-left-item">
                                        <Link className="link" to="/">
                                            Покупки
                                        </Link>
                                    </div>
                                    <Link className="link" to={`/likedMovies/${currentUser && currentUser._id}`}>
                                        <div className="opt-left-item">
                                            Смотреть позже
                                        </div>
                                    </Link>
                                    <div className="opt-left-item">
                                        <Link className="link" to={`/movieHistory/${currentUser && currentUser._id}`}>
                                            История просмотров
                                        </Link>
                                    </div>
                                    <div className="opt-left-item">
                                        <Link className="link" to="/">
                                            Подписки
                                        </Link>
                                    </div>
                                    <div className="opt-left-item">
                                        <Link className="link" to="/">
                                            Промокоды
                                        </Link>
                                    </div>
                                    <div className="opt-left-item">
                                        <Link className="link" to="/">
                                            Войти по коду
                                        </Link>
                                    </div>
                                    <div className="opt-left-item">
                                        <Link className="link" to="/">
                                            Методы оплаты
                                        </Link>
                                    </div>
                                    <div className="opt-left-item">
                                    <Link className="link" to="/">
                                        Пригласить друзей
                                    </Link>
                                </div>
                                </div>

                                <div className="options-right">
                                    <span className='navbar-profile'>Аккаунт</span>
                                    <div className="opt-r-img">
                                        <div className="img-name">
                                            <img
                                                src={user.user && user.user.img || '/img/noavatar.jpg'}
                                                alt=""
                                                className='img-r'
                                            />
                                            <span>{user.user && user.user.username}</span>
                                        </div>

                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Ic_person_add_48px.svg/1200px-Ic_person_add_48px.svg.png"
                                            alt=""
                                            className='img-u-r'
                                        />
                                    </div>

                                    <div className="opt-right-item">
                                        <Link className="link" to={'/user/edit/' + currentUser?._id}>
                                            <span className='navbar-profile-item'>Личный аккаунт</span>
                                        </Link>
                                    </div>
                                    <div className="opt-right-item">
                                        <Link className="link" to={`/user/${currentUser && currentUser._id}`}>
                                            <span className='navbar-profile-item'>Настройки</span>
                                        </Link>
                                    </div>
                                    <div className="opt-right-item">
                                        <Link className="link" to="/">
                                            <span className='navbar-profile-item'>Помощь</span>
                                        </Link>
                                    </div>
                                    <div className="opt-right-item">
                                        <Link className="link" to='' onClick={handleLogOut}>
                                            <span className='navbar-profile-item'>
                                                Выйти
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>}
                        </div>
                    ) : (
                        <>
                            <Link className="link" to="/login">
                                <button>Sign in</button>
                            </Link>
                            <Link className="link" to="/register">
                                <button>Join</button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
            {(currentUser && active && (pathname === "/" || pathname === '/movies')) && (
                <>
                    <hr />
                    <div className="menu">
                        <Link className="link menuLink" to="/movies/horror">
                            Ужасы
                        </Link>
                        <Link className="link menuLink" to="/movies/thriller">
                            Триллер
                        </Link>
                        <Link className="link menuLink" to="/movies/action">
                            Экшн
                        </Link>
                        <Link className="link menuLink" to="/movies/comedy">
                            Комедия
                        </Link>
                        <Link className="link menuLink" to="/movies/drama">
                            Драма
                        </Link>
                        <Link className="link menuLink" to="/movies/adventure">
                            Приключения
                        </Link>
                        <Link className="link menuLink" to="/movies/fantastic">
                            Фантастика
                        </Link>
                    </div>
                    <hr />
                </>
            )}
            {(currentUser && active && (pathname === '/cartoons')) && (
                <>
                    <hr />
                    <div className="menu">
                        <Link className="link menuLink" to="/cartoons/horror">
                            Ужасы
                        </Link>
                        <Link className="link menuLink" to="/cartoons/child">
                            Детские
                        </Link>
                        <Link className="link menuLink" to="/cartoons/animation">
                            Анимация
                        </Link>
                        <Link className="link menuLink" to="/cartoons/comedy">
                            Комедия
                        </Link>
                        <Link className="link menuLink" to="/cartoons/drama">
                            Драма
                        </Link>
                        <Link className="link menuLink" to="/cartoons/adventure">
                            Приключения
                        </Link>
                        <Link className="link menuLink" to="/cartoons/fantastic">
                            Фантастика
                        </Link>
                    </div>
                    <hr />
                </>
            )}
        </div>
    );
}

export default Navbar;