// src/pages/Nosotros.js
import React from 'react';
import { MissionSection, OurOriginSection, TeamSection, VisionSection, FAQSection } from '../components/sectionabout';

import '../../../public/css/style.css'
import '../../../public/css/bootstrap.min.css'
import '../../../public/css/tiny-slider.css'
function about() {
    return (
        <>
            <OurOriginSection/>
            <MissionSection/>
            <VisionSection/>
            <TeamSection/>
            <FAQSection/>
        </>
    );
}

export default about;
