"use client";
import React from 'react';
import { Link } from 'react-router-dom';
import '../../../public/css/style.css';
import '../../../public/css/bootstrap.min.css';
import '../../../public/css/tiny-slider.css';

const HeroSection = () => {
    return (
        <div className="" style={{backgroundImage: 'url(images/portada.png)', paddingBottom: '100px', backgroundSize: 'cover'}}>
            <div className="container">
                <div className="row justify-content-between" >
                    <div className="col-lg-5" style={{}}>

                        <div className="intro-excerpt" style={{marginTop: '50px', color: 'white'}}>
                            <h1 style={{fontSize: '50px'}}><span>Transformando Residuos en Oportunidades</span></h1>
                            <p>Explore la plataforma virtual de EcolApp, diseñada para conectar recicladores
                                independientes con usuarios que buscan deshacerse de materiales de construcción de manera
                                responsable y eficiente.</p>
                            <p>
                                <Link to="/nosotros" style={{background: 'white', color: 'black', fontWeight: 'bold'}} className="btn btn-white-outline me-2">Conozca más</Link>
                                <Link to="/contactar" className="btn btn-white-outline">Únase ahora</Link>
                            </p>
                        </div>
                    </div>
                    
                    {/* <div className="col-lg-6" style={{ marginTop: '180px', background: 'white', borderRadius: '20px', padding: '20px' }}>

                        <div className="intro-excerpt" style={{ marginTop: '50px' }}>
                            <h1 style={{ fontWeight: 'bold' }}><span>Transformando Residuos en Oportunidades</span></h1>
                            <p>Explore la plataforma virtual de EcolApp, diseñada para conectar recicladores
                                independientes con usuarios que buscan deshacerse de materiales de construcción de manera
                                responsable y eficiente.</p>
                            <p>
                                <Link to="/nosotros" style={{ background: 'black', color: 'white', fontWeight: '' }} className="btn btn-white-outline me-2">Conozca más</Link>
                                <Link to="/contactar" className="btn btn-white-outline" style={{ background: '#3b5d50' }} >Únase ahora</Link>
                            </p>
                        </div>
                    </div> */}
                    {/* <div className="col-lg-7">
                        <div className="" style={{textAlign: 'center'}}>
                            <img src="images/"  style={{width: '80%', marginBottom: '-90px'}} alt="Couch" className="img-fluid" />
                        </div>
                    </div> */}
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
                        <p>EcolApp transforma los residuos de construcción en oportunidades. Estas son las razones para elegirnos:</p>
                        <div className='row my-5'>
                            <div className='col-6 col-md-4'>
                                <div className="feature">
                                    <div className="icon">
                                        <img src="images/tecnologia.png" alt="Tecnología Simple y Eficaz" className="img-fluid"></img>
                                    </div>
                                    <h3>Tecnología Simple y Eficaz</h3>
                                    <p>Fácil de usar y accesible para todos, lo que garantiza una experiencia sin complicaciones tanto para recolectores como para usuarios.</p>
                                </div>
                            </div>
                            <div className='col-6 col-md-4'>
                                <div className="feature">
                                    <div className="icon">
                                        <img src="images/reciclar.png" alt="Promueve la sostenibilidad" className="img-fluid"></img>
                                    </div>
                                    <h3>Promueve la Sostenibilidad</h3>
                                    <p>Contribuye a la reducción de residuos y al reciclaje, fomentando un futuro más verde.</p>
                                </div>
                            </div>
                            <div className='col-6 col-md-4'>
                                <div className="feature">
                     
                                <div className="icon">
                                        <img src="images/truck.svg" alt="Beneficios para recicladores y empresas" className="img-fluid"></img>
                                    </div>
                                    <h3>Beneficios para Recicladores y Empresas </h3>
                                    <p>La plataforma conecta recicladores independientes con empresas de construcción.</p>
                                </div>
                            </div>
                            <div className='col-6 col-md-4'>
                                <div className="feature">

                                <div className="icon">
                                        <img src="images/bag.svg" alt="Facilita la recolección de residuos" className="img-fluid"></img>
                                    </div>
                                    <h3>Facilita la Recolección de Residuos</h3>
                                    <p>Ofrece un servicio rápido y eficiente en la recolección de materiales de
                                        construcción.</p>

                                </div>
                            </div>
                            <div className='col-6 col-md-4'>
                                <div className="feature">
                                    <div className="icon">
                                        <img src="images/support.svg" alt="Soporte 24/7" className="img-fluid"></img>
                                    </div>
                                    <h3>Soporte 24/7</h3>
                                    <p>El equipo de EcolApp está disponible en todo momento para atender todas las consultas sobre
                                        el servicio.</p>
                                </div>
                            </div>
                            <div className='col-6 col-md-4'>
                                <div className="feature">
                                    <div className="icon">
                                        <img src="images/todo.png" alt="Soporte 24/7" className="img-fluid"></img>
                                    </div>
                                    <h3>Solución Única</h3>
                                    <p>Primera plataforma en Perú para la gestión de desechos de construcción, conectando recolectores y usuarios.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="img-wrap">
                            <img src="images/Firefly PERO QUE REPRESENTE ECOLAPP. IMAGEN PARA PONER COMO PRINCIPAL EN LA PAGINA WEB. - Transforma.jpg" alt="Recolección de desperdicios de construcción" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const WeHelpSection = () => {
    return (

                <div className="why-choose-section">
                <div className="container">
                  <div className="row mb-5">
                    <div className="col-lg-12 text-center">
                      <h2 className="section-title" style={{ fontWeight: 'bold', fontSize: '52px', marginBottom: '40px' }}>
                        Solicita la Recolección en 5 Pasos
                      </h2>
                    </div>
                  </div>
                  <div className="row" style={{justifyContent: 'center'}}>
                    <div className="col-lg-4 mb-5">
                      <div className="step-item">
                        <img src="images/registrar.png"  style={{marginBottom: '20px'}} />
                        <h3 style={{ fontWeight: 'bold', fontSize: '24px', marginBottom: '20px' }}>1. Regístrate</h3>
                        <p>Crea tu cuenta en EcolApp. Es rápido y fácil para usuarios y recicladores.</p>
                      </div>
                    </div>
                    <div className="col-lg-4 mb-5">
                      <div className="step-item">
                      <img src="images/ordenar.png"  style={{marginBottom: '20px'}} />
                        <h3 style={{ fontWeight: 'bold', fontSize: '24px', marginBottom: '20px' }}>2. Publica tu Solicitud</h3>
                        <p>Como usuario, completa un breve formulario indicando qué materiales necesitas que recojan y dónde.</p>
                      </div>
                    </div>
                    <div className="col-lg-4 mb-5">
                      <div className="step-item">
                      <img src="images/find.png"  style={{marginBottom: '20px'}} />
                        <h3 style={{ fontWeight: 'bold', fontSize: '24px', marginBottom: '20px' }}>3. Conéctate con Recicladores</h3>
                        <p>EcolApp te asigna un reciclador y te envía sus detalles por el correo electrónico registrado.</p>
                      </div>
                    </div>
                    <div className="col-lg-4 mb-5" style={{marginRight: '30px'}}>
                      <div className="step-item">
                      <img src="images/coordinar.png"  style={{marginBottom: '20px'}} />
                        <h3 style={{ fontWeight: 'bold', fontSize: '24px', marginBottom: '20px' }}>4. Coordina la Recolección</h3>
                        <p>El reciclador se pone en contacto contigo para recoger los materiales en tu ubicación.</p>
                      </div>
                    </div>
                    <div className="col-lg-4 mb-5" style={{ marginLeft: '20px'}}>
                      <div className="step-item" >
                      <img src="images/cargar.png"  style={{marginBottom: '20px'}} />
                        <h3 style={{ fontWeight: 'bold', fontSize: '24px', marginBottom: '20px' }}>5. Recolección Eficiente</h3>
                        <p>El reciclador recoge los materiales de manera rápida y sostenible.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          

        // <div className="we-help-section" >
        //     <div className="container">
        //         <div className="row justify-content-between">
        //             <div className="col-lg-7 mb-5 mb-lg-0">
        //                 <div className="imgs-grid">
        //                     <div className="grid grid-1"><img src="images/img-grid-1.jpg" alt="EcolApp" /></div>
        //                     <div className="grid grid-2"><img src="images/img-grid-2.jpg" alt="EcolApp" /></div>
        //                     <div className="grid grid-3"><img src="images/img-grid-3.jpg" alt="EcolApp" /></div>
        //                 </div>
        //             </div>
        //             <div className="col-lg-5 ps-lg-5">
        //                 <h2 className="section-title mb-4">Solicita la Recolección en 5 pasos</h2>
        //                <ul className="list-unstyled custom-list my-4">
        //                     <li>Optimiza la recolección de residuos para minimizar su impacto ambiental.</li>
        //                     <li>Ofrece soluciones personalizadas para cada proyecto de construcción.</li>
        //                     <li>El equipo de EcolApp está disponible las 24 horas para atender las necesidades y garantizar un servicio de calidad.</li>
        //                     <li>Garantiza un proceso de recolección sin complicaciones, desde la solicitud hasta la finalización.</li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export { HeroSection, WhyChooseUsSection, WeHelpSection };
