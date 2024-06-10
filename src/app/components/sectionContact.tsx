import React from 'react';

import '../../../public/css/style.css';
import '../../../public/css/bootstrap.min.css';
import '../../../public/css/tiny-slider.css';
import { NavLink } from 'react-router-dom';

const HeroSection = () => (
  <div className="hero">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-5">
          <div className="intro-excerpt">
            <h1>Contáctenos</h1>
            <p className="mb-4" style={{ fontSize: '18px' }}>
              Para más información o alguna consulta específica sobre nuestro servicio,
              por favor contáctenos a través de alguno de nuestros medios oficiales.
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
              <li className="mb-2"><strong>Correo Electrónico:</strong> <a href="mailto:ecolapp.oficial@gmail.com">ecolapp.oficial@gmail.com</a></li>
              <li><strong>Redes Oficiales:</strong> Encuéntrenos en <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> y <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">TikTok</a></li>
            </ul>

            <h2 className="text-dark font-weight-bold mt-4" style={{ fontSize: '35px' }}>Registro</h2>
            <p>Si está interesado, puede registrarse directamente aquí <br/> y nos comunicaremos en el menor tiempo posible.</p>
            <NavLink to="/register" className="btn btn-primary">Registrarse</NavLink>
          </div>
          <div className="col-lg-6 mb-4">
            <h2 className="text-dark font-weight-bold" style={{ fontSize: '35px' }}>Horario de Atención</h2>
            <p>EcolApp está disponible de lunes a viernes de 9:00 a.m. a 6:00 p.m. para atender consultas y solicitudes.</p>
            <p>También se ofrece disponibilidad para emergencias fuera del horario laboral.</p>
            <h2 className="text-dark font-weight-bold mt-4" style={{ fontSize: '35px' }}>Tiempo de Respuesta</h2>
            <p>EcolApp se esfuerza por responder a todos los correos electrónicos y mensajes de formulario dentro de las 24 horas hábiles.</p>
            <p>Si no ha recibido respuesta en este plazo, por favor, contáctenos nuevamente.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export { ContactInformationSection, HeroSection };
