/* Importing components */
import React from 'react';
import '../../public/css/Header.css';
import logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <div className="logo">
                        <img src={logo} alt="logo of text 'BHAVYA' in white color and some orange shadow" />
                    </div>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

/* Exporting Header */
export default Header;