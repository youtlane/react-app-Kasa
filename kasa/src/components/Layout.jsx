
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './header/Header';
import Router from '../Router';
import Footer from './Footer/Footer';

export default function Layout() {
    return (
        <BrowserRouter>
            <Header />
            <Router />
            <Footer/>
        </BrowserRouter>
    );
}