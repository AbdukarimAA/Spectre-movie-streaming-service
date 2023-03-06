import React from 'react';
import Navbar from "../navbar/Navbar";
import {Outlet} from "react-router-dom";
import Footer from "../footer/Footer";

const Layout = () => {
    return (
        <div className='app'>
            <Navbar />
                <Outlet />
            <Footer />
        </div>
    )
}

export default Layout;