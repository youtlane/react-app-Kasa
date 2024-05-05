// Header.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg';
import './HeaderStyle.scss';

export default function Header() {
    const[currentRoute, setCurrentRoute] = useState()
    useEffect(()=>{
        const path = window.location.pathname;
        setCurrentRoute(path);
    },[]);
    
    return (
        <header className="header">
            <div className="header_logo">
                <Link to="/">
                    
                    <img className="logo" src={logo} alt="Logo" />
                </Link>
            </div>
            <nav className="header_nav">    
                <Link to="/" 
                onClick={() => setCurrentRoute("/")}
                className={
                    currentRoute==="/"
                    ? "header_nav_link-home-active"
                    : "header_nav_link-home"
                    }>
                    Accueil</Link>
                <Link to="/about"
                onClick={() => setCurrentRoute("about")}
                className={
                    currentRoute==="about"
                    ? "header_nav_link-home-active"
                    : "header_nav_link-home"
                    }>
                A Propos</Link>
            </nav>
        </header>
    );
}
