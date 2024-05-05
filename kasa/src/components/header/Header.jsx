import React from 'react';
import logo from '../../assets/logo.jpg';
import './HeaderStyle.scss';


export default function Header() {
    return (
        <header className="header">
            <div className="header_logo">
                <img  className="logo" src={logo} alt="Logo" />
            </div>
            <nav className="header_nav">
                
                
            </nav>
        </header>
    );
}
