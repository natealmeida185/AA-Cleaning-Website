import React from 'react';
import './about.style.css';
import Ashley from './images/aa-ashley1.jpg';

export default function About() {
    return (
        <div className="about container">
            <div className="about1">
                <h1 className="title">ABOUT</h1>
            </div>
            <div className="about2">
               <h1>Welcome To Care Free Living</h1>
                <p>Your spaces, especially your home, are important to you—and we value that.
                Our team of insured, professional cleaners are equipped with experience for any project. 
                You deserve nothing less than services you can trust and count on. Convenience at the 
                expense of the planet is not convenience at all. We make sure to keep our cleaning products 
                and practices sustainable at all costs.</p>
            </div>
            <div className="about3">
                <h1>We Speak Your Language</h1>
                <p>Our cleaners speak both Portuguese + Spanish</p>
                <p>Nossa equipe fala
                português e espanhol</p>
                <p>Nuestro equipo habla
                portugués y español</p>
            </div>
            <div className="about4">
                <h1>Why Us?</h1>
                <p>A&amp;A Spectacular Cleaning was founded with our clients in mind. We believe that a clean 
                space is essential to a happy lifestyle. A clean home is a happy home, and a tidy space is a tidy mind.
                We love what we do so you don't have to. Enjoy what you love the most and leave us the mess.</p>
            </div>
            <div className="about5">
                <img src={Ashley}></img>
            </div>
        </div>
    )       
}