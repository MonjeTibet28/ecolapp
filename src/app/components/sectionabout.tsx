
"use client";
import React from 'react';

import '../../../public/css/style.css'
import '../../../public/css/bootstrap.min.css'
import '../../../public/css/tiny-slider.css'

const OurOriginSection = () => {
    return (
      <div className="why-choose-section">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6">
              <h2 className="section-title" style={{ fontWeight: 'bold', fontSize: '52px', marginBottom: '40px' }}>Nuestro Origen</h2>
              <p style={{ fontSize: '20px' }}>EcolApp nació en las vibrantes calles de Lima, Perú. Como una empresa peruana apasionada por la sostenibilidad, nos dedicamos a transformar los residuos de construcción, en recursos valiosos que puedan ser reutilizados para futuros proyectos.</p>
            </div>
            <div className="col-lg-5">
              <div className="image-wrap">
                <img src="images/mueble1.png" alt="Origen de EcolApp" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const MissionSection = () => {
    return (
      <div className="why-choose-section">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5">
              <div className="image-wrap">
                <img src="images/mueble2.png" alt="Misión de EcolApp" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="section-title" style={{ fontWeight: 'bold', fontSize: '52px', marginBottom: '40px' }}>Misión</h2>
              <p style={{ fontSize: '20px' }}>Nuestra misión es reducir el impacto ambiental de la industria de la construcción al mismo tiempo que creamos productos de alta calidad y diseño. Trabajamos en estrecha colaboración con arquitectos, diseñadores y constructores para promover prácticas más sostenibles y responsables en la construcción.</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const TeamSection = () => {
    return (
      <div className="why-choose-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-12 text-center">
              <h2 className="section-title" style={{ fontWeight: 'bold', fontSize: '52px', marginBottom: '40px' }}>Nuestro Equipo</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            {/* Start Column 1 */}
            <div className="col-6 col-md-2 mb-5 mb-md-0">
              <img src="images/person_4.jpg" className="img-fluid mb-5" alt="Fiorella Castro" />
              <h3 style={{ fontWeight: 'bold', color: 'black', fontSize: '22px' }}>Fiorella Castro</h3>
              <span className="d-block position mb-4">CEO, Fundador</span>
              <p>Lawson ha liderado la compañía desde su creación, impulsando una cultura de innovación y sostenibilidad.</p>
            </div>
            {/* End Column 1 */}
  
            {/* Start Column 2 */}
            <div className="col-6 col-md-2 mb-5 mb-md-0">
              <img src="images/person_2.jpg" className="img-fluid mb-5" alt="Jhon Martinez" />
              <h3 style={{ fontWeight: 'bold', color: 'black', fontSize: '22px' }}>Jhon Martinez</h3>
              <span className="d-block position mb-4">CEO, Fundador</span>
              <p>Jeremy supervisa las operaciones diarias, asegurando que todo funcione sin problemas y eficientemente.</p>
            </div>
            {/* End Column 2 */}
  
            {/* Start Column 3 */}
            <div className="col-6 col-md-2 mb-5 mb-md-0">
              <img src="images/person_3.jpg" className="img-fluid mb-5" alt="Ramiro Cespedes" />
              <h3 style={{ fontWeight: 'bold', color: 'black', fontSize: '22px' }}>Ramiro Cespedes</h3>
              <span className="d-block position mb-4">CEO, Fundador</span>
              <p>Patrik maneja las finanzas de la compañía, garantizando estabilidad y crecimiento financiero.</p>
            </div>
            {/* End Column 3 */}
  
            {/* Start Column 4 */}
            <div className="col-6 col-md-2 mb-5 mb-md-0">
              <img src="images/person_2.jpg" className="img-fluid mb-5" alt="Dario Colombo" />
              <h3 style={{ fontWeight: 'bold', color: 'black', fontSize: '22px' }}>Dario Colombo</h3>
              <span className="d-block position mb-4">CEO, Fundador</span>
              <p>Kathryn dirige el desarrollo tecnológico y la implementación de nuevas soluciones innovadoras.</p>
            </div>
            {/* End Column 4 */}
  
            {/* Start Column 5 */}
            <div className="col-6 col-md-2 mb-5 mb-md-0">
              <img src="images/person_4.jpg" className="img-fluid mb-5" alt="Zingri Urpeque" />
              <h3 style={{ fontWeight: 'bold', color: 'black', fontSize: '22px' }}>Zingri Urpeque</h3>
              <span className="d-block position mb-4">CEO, Fundador</span>
              <p>Emily lidera la estrategia de marketing y comunicaciones de EcolApp, promoviendo nuestra visión y valores.</p>
            </div>
            {/* End Column 5 */}
          </div>
        </div>
      </div>
    );
  };

  export {TeamSection, MissionSection, OurOriginSection}