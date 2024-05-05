// Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg';
import './HeaderStyle.scss';

export default function Header() {
    return (
        <header className="header">
            <div className="header_logo">
                <Link to="/">
                    <img className="logo" src={logo} alt="Logo" />
                </Link>
            </div>
            <nav className="header_nav">    
                <Link to="/" className="header_nav_link-home">Accueil</Link>
                <Link to="/about" className="header_nav_link-about">A Propos</Link>
            </nav>
        </header>
    );
}
