
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg';

export default function Header() {
    const[currentRoute, setCurrentRoute] = useState()
    useEffect(()=>{
        const path = window.location.pathname;
        setCurrentRoute(path);
    },[]);
    
    return (
        <header className="header">
            <div className="header_logo">
                <Link to="/" 
                    onClick={() => setCurrentRoute("/")}
                    className={
                        currentRoute==="/"
                        ? "header_nav_link-home-active"
                        : "header_nav_link-home"
                    }>
                    <img className="logo" src={logo} alt="Logo" />
                </Link>
            </div>
            <nav className="header_nav"> 
                <ul className="navbar">
                    <li>
                        <Link to="/" 
                            onClick={() => setCurrentRoute("/")}
                            className={
                                currentRoute==="/"
                                ? "header_nav_link-home-active"
                                : "header_nav_link-home"
                            }>
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link to="/about"
                            onClick={() => setCurrentRoute("about")}
                            className={
                                currentRoute==="about"
                                ? "header_nav_link-home-active"
                                : "header_nav_link-home"
                            }>
                            A Propos
                        </Link>
                    </li>
                </ul>
                
                
            </nav>
        </header>
    );
}
