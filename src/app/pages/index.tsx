// src/pages/Nosotros.js
import React from 'react';
import { HeroSection, WeHelpSection, WhyChooseUsSection } from '../components/sectionIndex';

import '../../../public/css/style.css'
import '../../../public/css/bootstrap.min.css'
import '../../../public/css/tiny-slider.css'
const Home: React.FC = () => {
    return (
        <>
            <HeroSection/>
            <WhyChooseUsSection/>
            <WeHelpSection/>
        </>
    );
}

export default Home;
