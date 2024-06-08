import React from 'react';

import '../../../public/css/style.css'
import '../../../public/css/bootstrap.min.css'
import '../../../public/css/tiny-slider.css'

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
  <div className="why-choose-section" >
    <section className="contact-information">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2 style={{ fontWeight: 'bold', color: 'black', fontSize: '35px' }}>Formas de Contacto</h2>
            <ul className="list-unstyled">
              <li><strong>Correo Electrónico:</strong> ecolapp.oficial@gmail.com</li>
              <li><strong>Teléfono:</strong> +51 294 3925 3939</li>
              <li><strong>Redes Oficiales:</strong> Encuéntranos en Facebook y Tik Tok</li>
            </ul>
          </div>
          <div className="col-lg-6">
            <h2 style={{ fontWeight: 'bold', color: 'black', fontSize: '35px' }}>Horario de Atención</h2>
            <p>Estamos disponibles de lunes a viernes de 9:00 a.m. a 6:00 p.m. para atender tus consultas y solicitudes.</p>
            <p>También estamos disponibles para emergencias fuera del horario laboral.</p>
            <h2 style={{ fontWeight: 'bold', color: 'black', fontSize: '35px' }}>Tiempo de Respuesta</h2>
            <p>Nos esforzamos por responder a todos los correos electrónicos y mensajes de formulario dentro de las 24 horas hábiles.</p>
            <p>Si no has recibido respuesta en este plazo, por favor, contáctanos nuevamente.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export  {ContactInformationSection, HeroSection}
