import React from 'react';
import image from './images/main-img.jpeg';
import './carousel.style.css'
import { Link } from 'react-scroll';

export default function ControlledCarousel() {

    return (
        <>
        <img id="main-img" src={image}/>
        <div className="header">
            <h1>Spectacular + Sustainable</h1>
            <Link to={"contact-link"} spy={true} smooth={true} offset={-150}>
                <button>Book Cleaning</button>
            </Link>
        </div>
        </>
    );
}