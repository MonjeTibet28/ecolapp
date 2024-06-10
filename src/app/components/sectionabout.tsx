
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
            {/* <img src="images/person_4.jpg" className="img-fluid mb-5" alt="Fiorella Castro" /> */}
            <h3 style={{
              fontWeight: 'bold',
              color: 'black',
              fontSize: '22px',
              borderBottom: '2px solid black', // Agrega una línea debajo del nombre
              paddingBottom: '0.5rem' // Espacio entre el nombre y la línea
            }}>Fiorella Castro</h3>
            <span className="d-block position mb-4">CEO de Estrategia y Producto</span>
            <p>Define la visión del Producto Mínimo Viable de EcolApp y establece las prioridades estratégicas. Desarrolla la propuesta de valor inicial, asegura que el producto responda a las necesidades del mercado y coordina la creación y lanzamiento de las primeras versiones de la plataforma.</p>
          </div>
          {/* End Column 1 */}

          {/* Start Column 2 */}
          <div className="col-6 col-md-2 mb-5 mb-md-0">
            {/* <img src="images/person_2.jpg" className="img-fluid mb-5" alt="Jhon Martinez" /> */}
            <h3 style={{
              fontWeight: 'bold',
              color: 'black',
              fontSize: '22px',
              borderBottom: '2px solid black', // Agrega una línea debajo del nombre
              paddingBottom: '0.5rem' // Espacio entre el nombre y la línea
            }}>Jhon Martinez</h3>
            <span className="d-block position mb-4">CEO de Operaciones y Logística</span>
            <p>Se encarga de la planificación y ejecución de las operaciones del MVP, supervisando el diseño de flujos de recolección y las interacciones básicas con recicladores. Asegura la eficiencia en la logística y prueba la viabilidad operativa en el contexto real del MVP.</p>
          </div>
          {/* End Column 2 */}

          {/* Start Column 3 */}
          <div className="col-6 col-md-2 mb-5 mb-md-0">
            {/* <img src="images/person_3.jpg" className="img-fluid mb-5" alt="Ramiro Cespedes" /> */}
            <h3 style={{
              fontWeight: 'bold',
              color: 'black',
              fontSize: '22px',
              borderBottom: '2px solid black', // Agrega una línea debajo del nombre
              paddingBottom: '0.5rem' // Espacio entre el nombre y la línea
            }}>Ramiro Cespedes</h3>
            <span className="d-block position mb-4">CEO de Marketing y Validación de Mercado</span>
            <p>Promueve EcolApp durante el lanzamiento del Producto Mínimo Viable, ejecutando campañas de marketing de bajo costo y estableciendo canales de comunicación iniciales. Valida la aceptación del mercado a través de retroalimentación de los primeros usuarios y ajusta las estrategias de promoción en función de los resultados.</p>
          </div>
          {/* End Column 3 */}

          {/* Start Column 4 */}
          <div className="col-6 col-md-2 mb-5 mb-md-0">
            {/* <img src="images/person_2.jpg" className="img-fluid mb-5" alt="Dario Colombo" /> */}
            <h3 style={{
              fontWeight: 'bold',
              color: 'black',
              fontSize: '22px',
              borderBottom: '2px solid black', // Agrega una línea debajo del nombre
              paddingBottom: '0.5rem' // Espacio entre el nombre y la línea
            }}>Dario Colombo</h3>
            <span className="d-block position mb-4">CEO de Tecnología y Desarrollo</span>
            <p>Lidera el desarrollo del prototipo del Producto Mínimo Viable, enfocándose en construir una plataforma funcional con las características esenciales. Implementa soluciones técnicas rápidas y efectivas para validar la idea, priorizando la usabilidad y la escalabilidad básica.</p>
          </div>
          {/* End Column 4 */}

          {/* Start Column 5 */}
          <div className="col-6 col-md-2 mb-5 mb-md-0">
            {/* <img src="images/person_4.jpg" className="img-fluid mb-5" alt="Zingri Urpeque" /> */}
            <h3 style={{
              fontWeight: 'bold',
              color: 'black',
              fontSize: '22px',
              borderBottom: '2px solid black', // Agrega una línea debajo del nombre
              paddingBottom: '0.5rem' // Espacio entre el nombre y la línea
            }}>Zingri Urpeque</h3>
            <span className="d-block position mb-4">CEO de Finanzas y Administración</span>
            <p>Gestiona el presupuesto limitado del MVP, controlando costos y buscando financiamiento inicial. Administra los recursos financieros, elabora el plan de negocios básico y asegura la transparencia financiera para evaluar la viabilidad económica del MVP.</p>
          </div>
          {/* End Column 5 */}
        </div>
      </div>
    </div>
  );
};

export { TeamSection, MissionSection, OurOriginSection }