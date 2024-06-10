// src/components/ServicesSection.js

"use client";
import React from 'react';

import '../../../public/css/style.css'
import '../../../public/css/bootstrap.min.css'
import '../../../public/css/tiny-slider.css'

const services = [

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
                        <div className="col-6 col-md-6 col-lg-2 mb-4" style={{margin: '20px'}} key={index}>
                            <div className="feature">
                                <div className="icon">
                                    <img src={service.icon} alt={service.title} className="img-fluid" />
                                </div>
                                <h3 style={{fontSize: '20px'}}>{service.title}</h3>
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
