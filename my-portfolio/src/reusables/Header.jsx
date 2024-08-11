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
                        <img src={logo} alt="" />
                    </div>
                    <li><a href="/about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;