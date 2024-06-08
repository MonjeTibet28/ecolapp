// src/components/ServicesSection.js

"use client";
import React from 'react';

import '../../../public/css/style.css'
import '../../../public/css/bootstrap.min.css'
import '../../../public/css/tiny-slider.css'

const services = [
    {
        icon: '/images/clasificar.png',
        title: 'Clasificación de Residuos',
        description: 'Nuestro equipo se encarga de clasificar los diferentes tipos de residuos en el sitio, asegurando un reciclaje eficiente y responsable.'
    },
    {
        icon: '/images/centro.png',
        title: 'Centros de Reciclaje',
        description: 'Contamos con centros de reciclaje avanzados donde transformamos los residuos en nuevos materiales utilizables para la industria de la construcción.'
    },
    {
        icon: '/images/truck.svg',
        title: 'Logística y Transporte',
        description: 'Ofrecemos soluciones de transporte y logística para asegurar que los residuos sean recolectados y entregados de manera oportuna y segura.'
    },
    {
        icon: '/images/support.svg',
        title: 'Capacitación y Asesoramiento',
        description: 'Brindamos programas de capacitación y asesoramiento a empresas de construcción sobre prácticas sostenibles y gestión eficiente de residuos.'
    },
    {
        icon: '/images/asistente.png',
        title: 'Soporte 24/7',
        description: 'Nuestro equipo está disponible las 24 horas del día, los 7 días de la semana, para atender cualquier consulta o necesidad.'
    },
    {
        icon: '/images/competitivo.png',
        title: 'Precios Competitivos',
        description: 'Ofrecemos tarifas competitivas sin comprometer la calidad de nuestros servicios, asegurando una excelente relación calidad-precio.'
    },
    {
        icon: '/images/innovacion.png',
        title: 'Innovación en Reciclaje',
        description: 'Implementamos tecnologías innovadoras para mejorar continuamente nuestros procesos de reciclaje y minimizar el impacto ambiental.'
    },
    {
        icon: '/images/seguridad.png',
        title: 'Cumplimiento Normativo',
        description: 'Nos aseguramos de que todas nuestras operaciones cumplan con las normativas ambientales locales e internacionales.'
    }
];

const ServicesSection = () => {
    return (
        <div className="why-choose-section" >
            <div className="container">
                <h1 style={{ fontWeight: 'bold', fontSize: '40px', color: '#2f2f2f', marginTop: '50px' }}>Nuestros Servicios</h1>
                <div className="row my-5">
                    {services.map((service, index) => (
                        <div className="col-6 col-md-6 col-lg-3 mb-4" key={index}>
                            <div className="feature">
                                <div className="icon">
                                    <img src={service.icon} alt={service.title} className="img-fluid" />
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export { ServicesSection }
