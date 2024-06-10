"use client";
import React from 'react';
import { Link } from 'react-router-dom';
import '../../../public/css/style.css';
import '../../../public/css/bootstrap.min.css';
import '../../../public/css/tiny-slider.css';

const HeroSection = () => {
    return (
        <div className="hero">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-5">
                        <div className="intro-excerpt">
                            <h1><span>Transformando Residuos en Oportunidades</span></h1>
                            <p>Explore la plataforma virtual de EcolApp, diseñada para conectar recicladores
                                independientes con usuarios que buscan deshacerse de materiales de construcción de manera
                                responsable y eficiente.</p>
                            <p>
                                <Link to="/nosotros" style={{background: 'white', color: 'black', fontWeight: 'bold'}} className="btn btn-white-outline me-2">Conozca más</Link>
                                <Link to="/contactar" className="btn btn-white-outline">Únase ahora</Link>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="hero-img-wrap">
                            <img src="images/couch.png" alt="Couch" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const WhyChooseUsSection = () => {
    return (
        <div className="why-choose-section">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-6">
                        <h2 className="section-title">¿Por qué elegir EcolApp?</h2>
                        <p>EcolApp transforma los residuos de construcción en oportunidades. Estas son las razones para elegirnos</p>
                        <div className='row my-5'>
                            <div className='col-6 col-md-6'>
                                <div className="feature">
                                    <div className="icon">
                                        <img src="images/reciclar.png" alt="Promueve la sostenibilidad" className="img-fluid"></img>
                                    </div>
                                    <h3>Promueve la Sostenibilidad</h3>
                                    <p>Contribuye a la reducción de residuos y al reciclaje, fomentando un futuro más verde.</p>
                                </div>
                            </div>
                            <div className='col-6 col-md-6'>
                                <div className="feature">
                                    <div className="icon">
                                        <img src="images/bag.svg" alt="Facilita la recolección de residuos" className="img-fluid"></img>
                                    </div>
                                    <h3>Facilita la Recolección de Residuos</h3>
                                    <p>Ofrece un servicio rápido y eficiente en la recolección de materiales de
                                        construcción.</p>
                                </div>
                            </div>
                            <div className='col-6 col-md-6'>
                                <div className="feature">
                                    <div className="icon">
                                        <img src="images/truck.svg" alt="Beneficios para recicladores y empresas" className="img-fluid"></img>
                                    </div>
                                    <h3>Beneficios para Recicladores y Empresas de Construcción</h3>
                                    <p>La plataforma conecta recicladores independientes con empresas de construcción,
                                        creando oportunidades y reduciendo costos.</p>
                                </div>
                            </div>
                            <div className='col-6 col-md-6'>
                                <div className="feature">
                                    <div className="icon">
                                        <img src="images/support.svg" alt="Soporte 24/7" className="img-fluid"></img>
                                    </div>
                                    <h3>Soporte 24/7</h3>
                                    <p>El equipo de EcolApp está disponible en todo momento para atender todas las consultas sobre
                                        el servicio.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="img-wrap">
                            <img src="images/why-choose-us-img.jpg" alt="Recolección de desperdicios de construcción" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const WeHelpSection = () => {
    return (
        <div className="we-help-section" >
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-7 mb-5 mb-lg-0">
                        <div className="imgs-grid">
                            <div className="grid grid-1"><img src="images/img-grid-1.jpg" alt="EcolApp" /></div>
                            <div className="grid grid-2"><img src="images/img-grid-2.jpg" alt="EcolApp" /></div>
                            <div className="grid grid-3"><img src="images/img-grid-3.jpg" alt="EcolApp" /></div>
                        </div>
                    </div>
                    <div className="col-lg-5 ps-lg-5">
                        <h2 className="section-title mb-4">Transformando Residuos en Oportunidades</h2>
                        <p>EcolApp se especializa en la gestión eficiente de residuos de construcción, con el objetivo de convertir estos residuos en recursos valiosos y sostenibles para un futuro mejor.</p>
                        <ul className="list-unstyled custom-list my-4">
                            <li>Optimiza la recolección de residuos para minimizar su impacto ambiental.</li>
                            <li>Ofrece soluciones personalizadas para cada proyecto de construcción.</li>
                            <li>El equipo de EcolApp está disponible las 24 horas para atender las necesidades y garantizar un servicio de calidad.</li>
                            <li>Garantiza un proceso de recolección sin complicaciones, desde la solicitud hasta la finalización.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { HeroSection, WhyChooseUsSection, WeHelpSection };
