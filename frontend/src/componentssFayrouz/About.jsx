import React from 'react';
import { Link } from 'react-router-dom';
import { CiShop } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { RiRedPacketLine } from "react-icons/ri";
import { FaSackDollar } from "react-icons/fa6";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Footer from '../Footer';

function About() {
    const styles = `
    .footer {
        background-color: #282727;
        color: #fff;
        padding: 35px 10;
        font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        font-size: 1rem;
    }
    
    .footer-container {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    
    .footer-section {
        flex: 1 1 10px;
        margin: 0 120px;
    }
    
    .footer-section h3 {
        font-size: 1.5rem;
        margin-bottom: 15px;
    }
    
    .footer-section p,
    .footer-section address {
        font-size: 1.0rem;
    }
    
    .footer-section ul {
        list-style: none;
        padding: 0;
    }
    
    .footer-section li {
        margin-bottom: 10px;
    }
    
    .subscribe-form {
        display: flex;
    }
    
    .subscribe-input {
        flex: 1;
        padding: 0px;
        font-size: 20px;
    }
    
    .subscribe-button {
        background: none;
        border: none;
        color: #111111;
        font-size: 1.1rem;
        cursor: pointer;
    }
    
    .app-links img {
        width: 200px;
        margin: 50px 0;
    }
    
    .social-icons {
        display: flex;
    }
    
    .social-icons a {
        color: #fff;
        text-decoration: none;
        margin-right: 15px;
        font-size:1.9rem;
        transition: color 0.3s ease;
    }
    
    .social-icons a:hover {
        color: #c0b9b9;
    }
    
    .footer-bottom {
        background-color: #222;
        text-align: center;
        padding: 10px 0;
    }
    
    .footer-bottom p {
        margin: 0;
        font-size: 0.9rem;
        color: #ffffff;
    }
    
    
////////////////AboutCSS//////////////////////

    .about-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: -100px;
        margin-top: -40px;
    }

    .about-content {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-bottom: 50px;
    }

    .about-text {
        width: 50%;
        margin-right: 50px;
    }

    .about-text h2 {
        font-size: 45px;
        margin-bottom: 20px;
    }

    .about-text p {
        font-size: 27px;
        line-height: 1.5;
    }

    .about-image {
        width: 35%;
        height: auto;
    }

    .stats-container {
        display: flex;
        justify-content: space-between;
        width: 100%;
        max-width: 1200px;
        margin-top: 20px;
        flex-wrap: nowrap;
    }

    .stat-box {
        background-color: #f9f9f9;
        border: 1px solid #ddd;
        border-radius: 10px;
        padding: 20px;
        margin: 0 10px;
        text-align: center;
        width: calc(25% - 20px);
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .stat-logo {
        width: 40px;
        height: 40px;
        margin-bottom: 10px;
    }

    .stat-text h3 {
        font-size: 16px;
        margin-bottom: 5px;
        color: #333;
    }

    .stat-text p {
        font-size: 100px;
        color: #555;
    }
    `;

    return (
        <div>
            <div className="about-container">
                <div className="about-content">
                    <div className="about-text">
                        <h2>Our Story</h2>
                        <p>
                            Launched in 2024, Exclusive is North Africa's premier online shopping <br /> marketplace with an active presence in Tunis. Supported <br /> by a wide range of tailored marketing, data, and service solutions. <br /> Exclusive has 10,500 sellers and 300 brands and serves 3 million <br /> customers across the region. <br />    <br />Exclusive has more than 1 million products to offer, growing at a very fast pace. Exclusive offers a diverse assortment in categories ranging from consumer electronics to fashion and lifestyle products.
                        </p>
                    </div>
                    <img className="about-image" src="https://img.freepik.com/premium-photo/portrait-her-she-nice-attractive-cheerful-cheery-girl-carrying-new-clothing-things-spending-holiday-isolated-bright-vivid-shine-vibrant-green-blue-turquoise-color-wall_274222-15637.jpg" alt="About us" />
                </div>
                <div className="stats-container">
                    <div className="stat-box">
                        <div className="stat-text">
                            <h3><CiShop /> <br />Sellers Active On Our Site</h3>
                            <p>10.5K</p>
                        </div>
                    </div>
                    <div className="stat-box">
                        <div className="stat-text">
                            <h3><CiDollar /> <br />Monthly Product Sale</h3>
                            <p>33K</p>
                        </div>
                    </div>
                    <div className="stat-box">
                        <div className="stat-text">
                            <h3><RiRedPacketLine /> <br />Customers Active On Our Site</h3>
                            <p>45K</p>
                        </div>
                    </div>
                    <div className="stat-box">
                        <div className="stat-text">
                            <h3><FaSackDollar /> <br />Annual Gross Sale</h3>
                            <p>$35M</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <style>{styles}</style>
        </div>
    );
}

export default About;
