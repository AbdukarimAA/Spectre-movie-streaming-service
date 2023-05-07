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
                        <span className='footer-titles'>Support Service</span>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    );
}

export default Footer;
