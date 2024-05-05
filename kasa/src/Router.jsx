import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Property from './pages/property/Property'; 
import Error from './pages/error/Error';
import About from './pages/about/About';


export default function Router() {
    return (
      
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/property" element={<Property />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error />} />
          </Routes>
      );
}
