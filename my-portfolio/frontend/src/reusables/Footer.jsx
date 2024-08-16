import React from 'react';
import '../../public/css/Footer.css';
import logo from '../assets/logo.jpg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="footer-section links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/projects">Projects</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h2>Contact Me</h2>
                    <p>Email: <a href="mailto:bhavya.patel9834@gmail.com">bhavya.patel9834@gmail.com</a></p>
                    <p>Phone: <a href="tel:+14379626007">+1(437)962-6007</a></p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Bhavya Patel. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
