import React from 'react';

import '../../../public/css/style.css'
import '../../../public/css/bootstrap.min.css'
import '../../../public/css/tiny-slider.css'
import { NavLink } from 'react-router-dom';

const HeroSection = () => (
  <div className="hero">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-5">
          <div className="intro-excerpt">
            <h1>Contactanos</h1>
            <p className="mb-4" style={{ fontSize: '18px' }}>
              Para más información o alguna consulta específica de nuestro servicio,
              por favor contactenos por alguno de nuestros medios oficiales.
            </p>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="hero-img-wrap">
            <img src='./images/couch.png' alt="Couch" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ContactInformationSection = () => (
  <div className="why-choose-section">
    <section className="contact-information">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-4">
            <h2 className="text-dark font-weight-bold" style={{ fontSize: '35px' }}>Formas de Contacto</h2>
            <ul className="list-unstyled">
              <li className="mb-2"><strong>Correo Electrónico:</strong> <a >ecolapp.oficial@gmail.com</a></li>
              <li><strong>Redes Oficiales:</strong> Encuéntranos en <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> y <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">Tik Tok</a></li>
            </ul>

            <h2 className="text-dark font-weight-bold mt-4" style={{ fontSize: '35px' }}>Registrarse</h2>
            <p>Si esta interesado puede registrarse  directamente por aquí <br/> y nosotros le contactermos en el menor tiempo posible </p>
            <NavLink to="/register"  className="btn btn-primary">Registrarse</NavLink>
          </div>
          <div className="col-lg-6 mb-4">
            <h2 className="text-dark font-weight-bold" style={{ fontSize: '35px' }}>Horario de Atención</h2>
            <p>Estamos disponibles de lunes a viernes de 9:00 a.m. a 6:00 p.m. para atender tus consultas y solicitudes.</p>
            <p>También estamos disponibles para emergencias fuera del horario laboral.</p>
            <h2 className="text-dark font-weight-bold mt-4" style={{ fontSize: '35px' }}>Tiempo de Respuesta</h2>
            <p>Nos esforzamos por responder a todos los correos electrónicos y mensajes de formulario dentro de las 24 horas hábiles.</p>
            <p>Si no has recibido respuesta en este plazo, por favor, contáctanos nuevamente.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);


export  {ContactInformationSection, HeroSection}
