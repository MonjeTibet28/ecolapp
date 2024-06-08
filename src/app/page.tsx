
"use client";

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Nosotros from './pages/about';
import Servicio from './pages/service';
import Contactar from './pages/contact';
import Politicas from './pages/politicas'
import Home from './pages/index';
import Footer from './components/footer';


import '../../public/css/style.css'
import '../../public/css/bootstrap.min.css'
import '../../public/css/tiny-slider.css'
import ClientOnly from './clienteOnly';

function App() {
    return (
        <ClientOnly>
            <Router>
                <div>
                    <Header />
                    <Routes>
                        <Route path="/politicas" element={<Politicas />} />
                        <Route path="/nosotros" element={<Nosotros />} />
                        <Route path="/servicio" element={<Servicio />} />
                        <Route path="/contactar" element={<Contactar />} />
                        <Route path="/" element={<Home />} />
                    </Routes>
                    <div className='why-choose-section' />
                    <Footer />
                </div>
            </Router>
        </ClientOnly>
    );
}

export default App;
 