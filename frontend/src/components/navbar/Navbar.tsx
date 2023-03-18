import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
    const [active, setActive] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);

    const { pathname } = useLocation();

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", isActive);
        return () => {
            window.removeEventListener("scroll", isActive);
        };
    }, []);

    // const currentUser = null

    const currentUser = {
        id: 1,
        username: "Abdukarim",
        isSeller: true,
    };

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
                    <span className='navbar-links'>What's new</span>
                    <span className='navbar-links'>Movies</span>
                    <span className='navbar-links'>Serials</span>
                    <span className='navbar-links'>Cartoons</span>
                    <span className='navbar-links'>TV+</span>
                </div>
                <div className="links">
                    <span className='navbar-links'>Purchase a subscription</span>
                    {/*{!currentUser?.isSeller && <span>Become a Member</span>}*/}
                    {currentUser ? (
                        <div className="user active" onMouseEnter={handleModal} onClick={()=>setOpen(!open)}>
                            <img
                                    src="https://res.cloudinary.com/dedeobaxo/image/upload/v1678032108/Job_Market_proj/pfxhvpqaumrox8xxqcnq.jpg"
                                alt=""
                            />
                            <span>{currentUser?.username}</span>
                            {open && <div className="options active" onMouseLeave={()=>setOpen(!open)}>
                                <div className="options-left">
                                    {/*{currentUser.isSeller && (*/}
                                    {/*    <>*/}
                                    {/*        <div className="opt-left-item">*/}
                                    {/*            <Link className="link" to="/">*/}
                                    {/*                Films*/}
                                    {/*            </Link>*/}
                                    {/*        </div>*/}
                                    {/*        <div className="opt-left-item">*/}
                                    {/*            <Link className="link" to="/">*/}
                                    {/*                Add New Film*/}
                                    {/*            </Link>*/}
                                    {/*        </div>*/}
                                    {/*    </>*/}
                                    {/*)}*/}
                                    <div className="opt-left-item">
                                        <Link className="link" to="/">
                                            Purchases
                                        </Link>
                                    </div>
                                    <div className="opt-left-item">
                                        <Link className="link" to="/">
                                            Watch later
                                        </Link>
                                    </div>
                                    <div className="opt-left-item">
                                        <Link className="link" to="/">
                                            Browsing history
                                        </Link>
                                    </div>
                                    <div className="opt-left-item">
                                        <Link className="link" to="/">
                                            Subscriptions
                                        </Link>
                                    </div>
                                    <div className="opt-left-item">
                                        <Link className="link" to="/">
                                            Promo code activation
                                        </Link>
                                    </div><div className="opt-left-item">
                                    <Link className="link" to="/">
                                        Login by code
                                    </Link>
                                </div><div className="opt-left-item">
                                    <Link className="link" to="/">
                                        Payment method
                                    </Link>
                                </div><div className="opt-left-item">
                                    <Link className="link" to="/">
                                        Invite Friends
                                    </Link>
                                </div>
                                </div>

                                <div className="options-right">
                                    <span className='navbar-profile'>Account</span>
                                    <div className="opt-r-img">
                                        <div className="img-name">
                                            <img
                                                src="https://res.cloudinary.com/dedeobaxo/image/upload/v1678032108/Job_Market_proj/pfxhvpqaumrox8xxqcnq.jpg"
                                                alt=""
                                                className='img-r'
                                            />
                                            <span>{currentUser?.username}</span>
                                        </div>

                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Ic_person_add_48px.svg/1200px-Ic_person_add_48px.svg.png"
                                            alt=""
                                            className='img-u-r'
                                        />
                                    </div>

                                    <div className="opt-right-item">
                                        <Link className="link" to="/">
                                            <span className='navbar-profile-item'>Personal account</span>
                                        </Link>
                                    </div>
                                    <div className="opt-right-item">
                                        <Link className="link" to="/">
                                            <span className='navbar-profile-item'>Settings</span>
                                        </Link>
                                    </div>
                                    <div className="opt-right-item">
                                        <Link className="link" to="/">
                                            <span className='navbar-profile-item'>Help</span>
                                        </Link>
                                    </div>
                                    <div className="opt-right-item">
                                        <Link className="link" to="/">
                                            <span className='navbar-profile-item'>LogOut</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>}
                        </div>
                    ) : (
                        <>
                            <span>Sign in</span>
                            <Link className="link" to="/register">
                                <button>Join</button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
            {(active && pathname === "/") && (
                <>
                    <hr />
                    <div className="menu">
                        <Link className="link menuLink" to="/">
                            Horror
                        </Link>
                        <Link className="link menuLink" to="/">
                            Thriller
                        </Link>
                        <Link className="link menuLink" to="/">
                            Action
                        </Link>
                        <Link className="link menuLink" to="/">
                            Comedy
                        </Link>
                        <Link className="link menuLink" to="/">
                            Drama
                        </Link>
                        <Link className="link menuLink" to="/">
                            Documentary
                        </Link>
                        <Link className="link menuLink" to="/">
                            Fantastic
                        </Link>
                    </div>
                    <hr />
                </>
            )}
        </div>
    );
}

export default Navbar;