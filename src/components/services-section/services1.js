import React, { useState } from 'react';
import './services1.style.css';
import Residential from './images/residential-cleaning.jpg';
import Rental from './images/rental-cleaning.jpg';
import Office from './images/office-cleaning.jpg';
import Commercial from './images/commercial-cleaning.jpg';
import { Link } from 'react-router-dom';

export default function Services() {
    const[hover1, setHover1] = useState(true);
    const[hover2, setHover2] = useState(true);
    const[hover3, setHover3] = useState(true);
    const[hover4, setHover4] = useState(true);

    return (
        <>
        <div className="services container">
            <div className="service1">
                <h1 className="title">SERVICES</h1>
            </div>
            <div className="service2">
                <h2>MA &nbsp;•&nbsp; Boston &nbsp;•&nbsp; RI&nbsp;</h2>
                <hr/>
            </div> 
            <Link to="/gallery"> 
                <div onMouseOut={() => setHover1(!hover1)} onMouseOver={() => setHover1(!hover1)} className={hover1 ? 'residential' : 'residential-hover'}>
                    <h1>RESIDENTIAL<br/>HOMES</h1>
                    <button>View Gallery</button>
                    <img src={Residential} alt="residental-service"></img>
                </div>
            </Link>
            <Link to="/gallery"> 
                <div onMouseOut={() => setHover2(!hover2)} onMouseOver={() => setHover2(!hover2)} className={hover2 ? 'rental' : 'rental-hover'}>
                    <h1>RENTAL<br/>PROPERTIES</h1>
                    <button>View Gallery</button>
                    <img src={Rental} alt="rental-service"></img>
                </div>
            </Link>
            <Link to="/gallery"> 
                <div onMouseOut={() => setHover3(!hover3)} onMouseOver={() => setHover3(!hover3)} className={hover3 ? 'office' : 'office-hover'}>
                    <h1>OFFICE<br/>SPACES</h1>
                    <button>View Gallery</button>
                    <img src={Office} alt="office-service"></img>
                </div>
            </Link>
            <Link to="/gallery"> 
                <div onMouseOut={() => setHover4(!hover4)} onMouseOver={() => setHover4(!hover4)} className={hover4 ? 'commercial' : 'commercial-hover'}>
                    <h1>COMMERCIAL<br/>PROPERTIES</h1>
                    <button>View Gallery</button>
                    <img src={Commercial} alt="commercial-service"></img>
                </div>
            </Link>
            <div className="service7">
                <h2>
                    Residential homes &nbsp;•&nbsp;
                    Rental/Hotel properties &nbsp;•&nbsp;
                    Office spaces &nbsp;•&nbsp;
                    Gym facilities &nbsp;•&nbsp;
                    Corporate/Commercial settings &nbsp;•&nbsp;
                    Construction clean-up &nbsp;•&nbsp;
                    Move in + outs<br/>
                </h2>
                <h3>*Inquire about spaces not listed</h3>
            </div>
        </div>
        </>
    );
}