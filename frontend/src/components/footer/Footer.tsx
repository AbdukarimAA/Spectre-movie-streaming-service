import React from "react";
import "./Footer.scss";

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="top">
                    <div className="item">
                        <h2>Categories</h2>
                        <span className='footer-titles'>Horror</span>
                        <span className='footer-titles'>Comedy</span>
                        <span className='footer-titles'>Action</span>
                        <span className='footer-titles'>Drama</span>
                        <span className='footer-titles'>Fantastic</span>
                        <span className='footer-titles'>Science</span>
                    </div>
                    <div className="item">
                        <h2>About</h2>
                        <span className='footer-titles'>Press & News</span>
                        <span className='footer-titles'>Partnerships</span>
                        <span className='footer-titles'>Privacy Policy</span>
                        <span className='footer-titles'>Terms of Service</span>
                        <span className='footer-titles'>Investor Relations</span>
                        <span className='footer-titles'>Contact Sales</span>
                    </div>
                    <div className="item">
                        <h2>Support</h2>
                        <span className='footer-titles'>Help & Support</span>
                        <span className='footer-titles'>Trust & Safety</span>
                    </div>
                    <div className="item">
                        <h2>About us</h2>
                        <span className='footer-titles'>Advertising placement</span>
                        <span className='footer-titles'>Forum</span>
                        <span className='footer-titles'>Events</span>
                        <span className='footer-titles'>Podcast</span>
                        <span className='footer-titles'>Invite a Friend</span>
                        <span className='footer-titles'>Vacancy</span>
                    </div>
                    <div className="item">
                        <h2>More From Spectre</h2>
                        <span className='footer-titles'>Spectre's team</span>
                        <span className='footer-titles'>Spectre Pro</span>
                        <span className='footer-titles'>Spectre Marketing</span>
                        <span className='footer-titles'>Spectre Guides</span>
                    </div>
                </div>
                <hr />
                <div className="bottom">
                    <div className="left">
                        <h2>Spectre</h2>
                        <span>© Spectre International Ltd. 2023</span>
                    </div>
                    <div className="right">
                        <div className="social">
                            <img className='footer-net' src="/img/twitter.png" alt="" />
                            <img className='footer-net' src="/img/linkedin.png" alt="" />
                            <img className='footer-net' src="/img/pinterest.png" alt="" />
                            <img className='footer-net' src="/img/instagram.png" alt="" />
                        </div>
                        <div className="link">
                            <img src="/img/language.png" alt="" />
                            <span>English</span>
                        </div>
                        <div className="link">
                            <img src="/img/coin.png" alt="" />
                            <span>USD</span>
                        </div>
                        <img src="/img/accessibility.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
