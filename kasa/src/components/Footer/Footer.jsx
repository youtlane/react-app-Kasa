import React from 'react'
import logo from '../../assets/logo-white.png';

export default function Footer() {
    return (
        <footer className="footer">
            <img className="footer_logo-white" src={logo} alt="Logo" />
            <h3 className="footer_title">© 2020 Kasa. All rights reserved</h3>
        </footer>
    );
}
