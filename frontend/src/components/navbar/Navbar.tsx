import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);

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

    return (
        <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
            <div className="container">
                <div className="logo">
                    <Link className="link" to="/">
                        <span className="text">Spectre</span>
                    </Link>
                </div>
                <div className="links">
                    <span className='navbar-links'>What's new</span>
                    <span className='navbar-links'>Movies</span>
                    <span className='navbar-links'>Serials</span>
                    <span className='navbar-links'>Cartoons</span>
                    <span className='navbar-links'>TV+</span>
                    <span className='navbar-links'>Purchase a subscription</span>
                    {!currentUser?.isSeller && <span>Become a Seller</span>}
                    {currentUser ? (
                        <div className="user" onClick={()=>setOpen(!open)}>
                            <img
                                src="https://res.cloudinary.com/dedeobaxo/image/upload/v1678032108/Job_Market_proj/pfxhvpqaumrox8xxqcnq.jpg"
                                alt=""
                            />
                            <span>{currentUser?.username}</span>
                            {open && <div className="options">
                                {currentUser.isSeller && (
                                    <>
                                        <Link className="link" to="/mygigs">
                                            Films
                                        </Link>
                                        <Link className="link" to="/add">
                                            Add New Film
                                        </Link>
                                    </>
                                )}
                                <Link className="link" to="/orders">
                                    Personal account
                                </Link>
                                <Link className="link" to="/messages">
                                    Favorite
                                </Link>
                                <Link className="link" to="/">
                                    Logout
                                </Link>
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
            {(active || pathname !== "/") && (
                <>
                    <hr />
                    <div className="menu">
                        <Link className="link menuLink" to="/">
                            Graphics & Design
                        </Link>
                        <Link className="link menuLink" to="/">
                            Video & Animation
                        </Link>
                        <Link className="link menuLink" to="/">
                            Writing & Translation
                        </Link>
                        <Link className="link menuLink" to="/">
                            AI Services
                        </Link>
                        <Link className="link menuLink" to="/">
                            Digital Marketing
                        </Link>
                        <Link className="link menuLink" to="/">
                            Music & Audio
                        </Link>
                        <Link className="link menuLink" to="/">
                            Programming & Tech
                        </Link>
                        <Link className="link menuLink" to="/">
                            Business
                        </Link>
                        <Link className="link menuLink" to="/">
                            Lifestyle
                        </Link>
                    </div>
                    <hr />
                </>
            )}
        </div>
    );
}

export default Navbar;