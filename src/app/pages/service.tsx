// src/pages/Nosotros.js
import React from 'react';
import { ServicesSection, BeneficiosClave } from '../components/sectionService';

import '../../../public/css/style.css'
import '../../../public/css/bootstrap.min.css'
import '../../../public/css/tiny-slider.css'
function service() {
    return (
        <>
            <BeneficiosClave/>
            <ServicesSection/>
        </>
    );
}

export default service;
