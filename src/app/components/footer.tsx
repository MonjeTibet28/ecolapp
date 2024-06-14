
"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import '../../../public/css/style.css'
import '../../../public/css/bootstrap.min.css'
import '../../../public/css/tiny-slider.css'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section" >


      <div className="container relative" >

        <div className="sofa-img" style={{margin: '-100px'}}>
          <img className='img-fluid' src="images/fondo2.png" alt="" />
        </div>


        <div className="row g-5 mb-5" >
          <div className="col-lg-4">
            <div className="mb-4 footer-logo-wrap" style={{ marginTop: '30px' }}>
              <Link className="navbar-brand" to="/">
                <img className="logo img-fluid" src="images/logo.png" alt="EcolApp Logo" style={{ width: '40%' }} />
              </Link>
            </div>
            <p className="mb-4">En EcolApp, nos esforzamos por transformar los residuos de construcción en oportunidades sostenibles. Nuestro compromiso es mantener un mundo más limpio y habitable.</p>
            <ul className="list-unstyled ">
              <li><a style={{ marginRight: '20px', fontSize: '24px' }} href="https://www.facebook.com/profile.php?id=61560582821476" target="_blank" aria-label="Facebook"><img src="images/facebook.png" alt="TikTok" /></a>
                <a href="https://www.tiktok.com/@ecolapp.oficial" target="_blank" aria-label="TikTok"><img style={{ marginBottom: '3.5px' }} src="images/tiktok.png" alt="TikTok" /></a></li>
            </ul>
          </div>

          {/* <div className="col-lg-6">
          <p className="mb-4" style={{fontSize: '20px'}}>En EcolApp, nos esforzamos por transformar los residuos de construcción en oportunidades sostenibles. Nuestro compromiso es mantener un mundo más limpio y habitable.</p>
            <ul className="list-unstyled ">
              <li><a style={{marginRight: '20px', fontSize: '24px'}} href="https://www.facebook.com/profile.php?id=61560582821476" target="_blank" aria-label="Facebook"><img src="images/facebook.png" alt="TikTok" /></a>
              <a href="https://www.tiktok.com/@ecolapp.oficial" target="_blank" aria-label="TikTok"><img style={{marginBottom: '3.5px'}} src="images/tiktok.png" alt="TikTok" /></a></li>
            </ul>
          </div> */}


          {/* <div className="col-lg-8">
            <div className="row links-wrap">
              <div className="col-6 col-sm-6 col-md-3">
                <ul className="list-unstyled">
                  <li><Link to="/nosotros">Acerca de nosotros</Link></li>
                  <li><Link to="/servicio">Servicios</Link></li>
                  <li><Link to="/contactar">Contáctanos</Link></li>
                </ul>
              </div>

              <div className="col-6 col-sm-6 col-md-3">
                <ul className="list-unstyled">
                  <li><Link to="/contactar">Soporte</Link></li>
                  <li><Link to="/base-conocimientos">Base de conocimientos</Link></li>
                  <li><Link to="/contactar">Chat en vivo</Link></li>
                </ul>
              </div>

              <div className="col-6 col-sm-6 col-md-3">
                <ul className="list-unstyled">
                  <li><Link to="/contactar">Empleos</Link></li>
                  <li><Link to="/nosotros">Nuestro equipo</Link></li>
                  <li><Link to="/nosotros">Liderazgo</Link></li>
                  <li><Link to="/politica">Política de privacidad</Link></li>
                </ul>
              </div>
            </div>
          </div>
           */}
        </div>

        <div className="border-top">
          <div className="row pt-4">
            <div className="col-lg-6">
              <p className="mb-2 text-center text-lg-start">
                Derechos de autor © {currentYear}. Todos los derechos reservados.
              </p>
            </div>
            <div className="col-lg-6 text-center text-lg-end">
              <ul className="list-unstyled d-inline-flex ms-auto">
                <li className="me-4"><Link to="/politicas">Términos y condiciones</Link></li>
                <li><Link to="/politicas">Política de privacidad</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
