// src/components/ServicesSection.js

"use client";
import React from 'react';

import '../../../public/css/style.css'
import '../../../public/css/bootstrap.min.css'
import '../../../public/css/tiny-slider.css'

const services = [

    {
        icon: '/images/truck.svg',
        title: 'Recolección de Materiales de Construcción',
        description: 'Facilitamos la recolección de materiales como acero, aluminio, cobre, hormigón, plástico, madera y vidrio, conectando a recolectores con usuarios que necesitan deshacerse de estos desechos.'
    },
    {
        icon: '/images/ecologico.png',
        title: 'Eficiencia Sostenible',
        description: 'Facilitamos la recolección de materiales reutilizables, reduciendo el impacto ambiental.'
    },
    {
        icon: '/images/eficiencia.png',
        title: 'Gestión Económica',
        description: 'Optimiza la recolección de residuos sin costos adicionales de transporte o infraestructura, haciendo la gestión más accesible y rentable.'
    },
    {
        icon: '/images/innovacion.png',
        title: 'Plataforma Intuitiva',
        description: 'Ofrecemos una interfaz sencilla para publicar solicitudes de recolección y ofertar servicios, haciendo el proceso fácil y rápido para todos los usuarios.'
    },
    {
        icon: '/images/comunidad.png',
        title: 'Apoyo a Recolectores',
        description: 'Generamos oportunidades para recolectores, conectándolos con usuarios.'
    },
    {
        icon: '/images/compromiso.png',
        title: 'Compromiso Ambiental',
        description: 'Promovemos la economía circular, convirtiendo desechos en recursos útiles.'
    },
    {
        icon: '/images/unir.png',
        title: 'Conexión Directa',
        description: 'Facilitamos la comunicación y acuerdos claros entre recolectores y usuarios.'
    },
    {
        icon: '/images/asistente.png',
        title: 'Soporte Personalizado',
        description: 'Brindamos asistencia continua para resolver cualquier consulta o problema, asegurando una experiencia satisfactoria.'
    },  
    {
        icon: '/images/seguir.png',
        title: 'Alertas y Notificaciones',
        description: 'Los usuarios reciben alertas y notificaciones, por medio del correo que se registraron, sobre el estado de sus solicitudes de recolección, emparejamientos, y confirmaciones, manteniéndolos informados en cada etapa del proceso.'
    },  
    
    {
        icon: '/images/seguridad.png',
        title: 'Cumplimiento Normativo',
        description: 'Nos aseguramos de que todas nuestras operaciones cumplan con las normativas ambientales locales e internacionales.'
    }
    
];
// 'icon'
const ServicesSection = () => {
    return (
        <div className="why-choose-section">
            <div className="container">
              <div className="col-lg-12 text-center">
                
              <h1 className='section-title' style={{ fontWeight: 'bold', fontSize: '52px', color: '#2f2f2f', marginTop: '50px', marginBottom: '60px' }}>Nuestros Servicios</h1>
              </div>
                <div className="row my-5" style={{justifyContent: 'center'}}>
                    {services.map((service, index) => (
                        <div className="col-6 col-md-6 col-lg-3 mb-4" style={{ justifyContent: 'center' }} key={index}>
                            <div className="feature" style={{ display: 'flex', flexDirection: 'column' }}>
                                <div style={{ marginBottom: '20px' }}>
                                    <img src={service.icon} alt={service.title} className="img-fluid" />
                                </div>
                                <h3 style={{ fontSize: '20px', minHeight: '60px' }}>{service.title}</h3>
                                <p style={{ flex: '1' }}>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const BeneficiosClave = () => {
    return (
      <div className="why-choose-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-12 text-center">
              <h2 className="section-title" style={{ fontWeight: 'bold', fontSize: '52px', marginBottom: '40px' }}>
                Beneficios Clave
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 mb-5">
              <div className="benefit-item">
                <h3 style={{ fontWeight: 'bold', fontSize: '32px', marginBottom: '40px' }}>Para Empresas de Construcción</h3>
                <ul className="list-unstyled list-puntos">
                  <li><strong>Ahorro de Costos:</strong> Reduce gastos en gestión de desechos.</li>
                  <li><strong>Fácil Coordinación:</strong> Conecta rápidamente con recicladores.</li>
                  <li><strong>Cumplimiento Ambiental:</strong> Gestiona residuos de manera responsable.</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 mb-5">
              <div className="benefit-item">
                <h3 style={{ fontWeight: 'bold', fontSize: '32px', marginBottom: '40px' }}>Para Propietarios de Viviendas</h3>
                <ul className="list-unstyled list-puntos">
                  <li> <strong>Recogida Conveniente:</strong> Solicita recolección fácil desde tu hogar.</li>
                  <li> <strong>Sin Esfuerzo: </strong> Los recicladores recogen los desechos en tu ubicación.</li>
                  <li> <strong>Apoyo Sostenible:</strong> Contribuye a un entorno más limpio.</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 mb-5">
              <div className="benefit-item">
                <h3 style={{ fontWeight: 'bold', fontSize: '32px', marginBottom: '40px' }}>Para Recicladores Independientes</h3>
                <ul className="list-unstyled list-puntos">
                  <li><strong>Más Clientes:</strong> Conecta con usuarios que necesitan tus servicios.</li>
                  <li> <strong>Ingresos Adicionales:</strong> Aumenta tus oportunidades de trabajo.</li>
                  <li><strong>Flexibilidad: </strong> Elige los trabajos según tu disponibilidad.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export { ServicesSection, BeneficiosClave }
