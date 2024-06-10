"use client";

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Nosotros from './pages/about';
import Servicio from './pages/service';
import Contactar from './pages/contact';
import Politicas from './pages/politicas';
import Home from './pages/index';
import Footer from './components/footer';
import RegisterPage from '../app/pages/register';

import '../../public/css/style.css';
import '../../public/css/bootstrap.min.css';
import '../../public/css/tiny-slider.css';
import ClientOnly from './clienteOnly';

function App() {
    return (
        <ClientOnly>
            <Router>
                <Routes>
                    <Route path="/register" element={<RegisterPage />} />
                    <Route
                        path="/politicas"
                        element={
                            <>
                                <Header />
                                <Politicas />
                                <div className="why-choose-section"/>
                                <Footer />
                            </>
                        }
                    />
                    <Route
                        path="/nosotros"
                        element={
                            <>
                                <Header />
                                <Nosotros />
                                <div className="why-choose-section"/>
                                <Footer />
                            </>
                        }
                    />
                    <Route
                        path="/servicio"
                        element={
                            <>
                                <Header />
                                <Servicio />
                                <div className="why-choose-section"/>
                                <Footer />
                            </>
                        }
                    />
                    <Route
                        path="/contactar"
                        element={
                            <>
                                <Header />
                                <Contactar />
                                <div className="why-choose-section"/>
                                <Footer />
                            </>
                        }
                    />
                    <Route
                        path="/"
                        element={
                            <>
                                <Header />
                                <Home />
                                <div className="why-choose-section"/>
                                <Footer />
                            </>
                        }
                    />
                </Routes>
            </Router>
        </ClientOnly>
    );
}

export default App;
