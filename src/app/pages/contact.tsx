import React from 'react';
import {  ContactInformationSection, HeroSection} from '../components/sectionContact';
import '../../../public/css/style.css'
import '../../../public/css/bootstrap.min.css'
import '../../../public/css/tiny-slider.css'


function contact() {
    return (
        <>
            <HeroSection/>
            <div style={{padding: 30, background: '#eff2f1'}}/>
            <ContactInformationSection/>
        </>
    );
}

export default contact;
