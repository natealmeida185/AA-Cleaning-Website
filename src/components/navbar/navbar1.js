import React, { useState } from 'react';
import './navbar.style.css';
import logo from './images/aa-logo.png';
import google from './images/google-icon.png';
import facebook from './images/facebook-icon3.png';
import angies from './images/angies-list-icon3.png';
import phone from './images/telephone.png';
import email from './images/email-icon.png';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';

export default function Hero() {
    const[clicked, setClicked] = useState(false);

    const handleClick = () => {
        if(!clicked) {
            setClicked(true)
        }
        else if (clicked) {
            setClicked(false)
        }
    }

    const scrollToTop = () => {
        scroll.scrollToTop();
        setClicked(false);
    }

    const scrollToContact = () => {
        setClicked(false);
    }

    return (
        <>
        <div className="top-bar">
            <div className="top-contact1">   
                <a href="tel: 7743017959"><p className="phone-number">508-933-7701<img id="phone-icon1" src={phone}></img></p></a>
                <a href="mailto: nathanalmeida@gmail.com"><p className="email-address">aaspectacularcleaning@gmail.com<img id="email-icon" src={email}></img></p></a>
            </div>
            <div className="top-contact2">
                <a href="mailto: nathanalmeida@gmail.com"><p className="email-address">aaspectacularcleaning@gmail.com<img id="email-icon" src={email}></img></p></a>
            </div>
            <div className="top-contact3">
                <a href="tel: 7743017959"><p>Call for a free quote<img id="phone-icon2" src={phone}></img></p></a>
            </div>
            <div className="top-social">
                <a href="https://g.page/a-a-spectacular-cleaning?share"><img id="google-nav" src={google}></img></a>
                <a href="https://www.facebook.com/aaspectacularcleaning"><img id="fb-nav" src={facebook}></img></a>
                <a href="https://member.angieslist.com/app/reviews/vrf?serviceProviderId=24656421"><img id="angies-nav" src={angies}></img></a>
            </div>
        </div>
        <div className="call-quote2">
        <a href="tel: 7743017959"><p>Call for a free quote<img id="phone-icon2" src={phone}></img></p></a>
        </div>
        <nav className="navbar">
            <NavLink exact to="/">
                <img className="logo" src={logo} alt="logo" onClick={() => scroll.scrollToTop()}></img>
            </NavLink>
            <div className="menu-icon" onClick={handleClick}>
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <Link id="nav-link" to="home-link" activeClass="active-link" spy={true} smooth={true} offset={-80}>
                        <a className="link" onClick={scrollToTop}>Home</a>
                    </Link>

                    <NavLink id="nav-link" to="/gallery" activeClassName="active-link">
                        <a className="link" onClick={scrollToTop}>Gallery</a>
                    </NavLink>
                    
                    <Link id="nav-link" activeClass="active-link" to="contact container" spy={true} smooth={true} duration={1200} offset={-150}>
                        <a className="link" onClick={scrollToContact}>Contact</a>
                    </Link>

                    <NavLink id="nav-link" to="/apply" activeClassName="active-link">
                        <a className="link" onClick={scrollToTop}>Apply</a>
                    </NavLink>
                </li>
            </ul>
        </nav>
        </>
    )
}