import React from 'react';
import Hero from '../navbar/navbar1';
import ControlledCarousel from '../carousel/carousel';
import About from '../about-section/about';
import Services1 from '../services-section/services1';
import Services2 from '../services-section/services2';
import Contact from '../contact-section/contact';
import './home-page.style.css';

export default function HomePage() {
    return (
        <>
            <Hero />
            <div className="home-link">
                <ControlledCarousel />
                <About />
                <div className="services-section1">
                    <Services1 />
                </div>
                <div className="services-section2">
                    <Services2 />
                </div>
            </div>
            <Contact />
        </>
    )
}