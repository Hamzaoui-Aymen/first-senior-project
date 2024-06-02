import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css'; // Import the CSS file
import { IoIosAppstore } from "react-icons/io";
import { PiGooglePlayLogo } from "react-icons/pi";
import { BsTwitterX } from "react-icons/bs";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>Exclusive</h3>
                    <p>Subscribe</p>
                    <p>Get 10% off your first order</p>
                    <form className="subscribe-form">
                        <input type="email" placeholder="Enter your email" className="subscribe-input" />
                        <button type="submit" className="subscribe-button">➔</button>
                    </form>
                </div>
                <div className="footer-section">
                    <h3>Support</h3>
                    <address>
                        <br />
                        DH 1515, Tunis.<br />
                        Exclusive@gmail.com<br />
                        +2165252889 <br />
                    </address>
                </div>
                <div className="footer-section">
                    <h3>Account</h3>
                    <ul>
                        <li><Link to="/signin">Signin</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                        <li><Link to="/wishlist">Wishlist</Link></li>
                        <li><Link to="/">Home</Link></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Quick link</h3>
                    <ul>
                        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                        <li><Link to="/terms-of-use">Terms of Use</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Download app</h3>
                    <p>Save $3 with App </p>
                    <div className="app-links">
                    <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer"><IoIosAppstore /></a>
                    <a href="https://play.google.com/store/games?hl=en" target="_blank" rel="noopener noreferrer"><PiGooglePlayLogo /></a>

                    </div>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><BsTwitterX /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; Copyright Rimel 2022. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
