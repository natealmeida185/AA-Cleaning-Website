import React, { useState } from 'react';
import './services2.style.css';
import Residential from './images/residential-cleaning.jpg';
import Rental from './images/rental-cleaning.jpg';
import Office from './images/office-cleaning.jpg';
import Commercial from './images/commercial-cleaning.jpg';
import DelayLink from 'react-delay-link';

export default function Services() {
    const[click1, setClick1] = useState(true);
    const[click2, setClick2] = useState(true);
    const[click3, setClick3] = useState(true);
    const[click4, setClick4] = useState(true);

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
            <DelayLink delay={700} to="/gallery"> 
            <div onClick={() => setClick1(!click1)} className={click1 ? 'residential2' : 'residential2-click'}>
                <h1>RESIDENTIAL<br/>HOMES</h1>
                <button>View Gallery</button>
                <img src={Residential} alt="residental-service"></img>
            </div>
            </DelayLink>
            <DelayLink delay={700} to="/gallery"> 
            <div onClick={() => setClick2(!click2)} className={click2 ? 'rental2' : 'rental2-click'}>
                <h1>RENTAL<br/>PROPERTIES</h1>
                <button>View Gallery</button>
                <img src={Rental} alt="rental-service"></img>
            </div>
            </DelayLink>
            <DelayLink delay={700} to="/gallery"> 
            <div onClick={() => setClick3(!click3)} className={click3 ? 'office2' : 'office2-click'}>
                <h1>OFFICE<br/>SPACES</h1>
                <button>View Gallery</button>
                <img src={Office} alt="office-service"></img>
            </div>
            </DelayLink>
            <DelayLink delay={700} to="/gallery"> 
            <div onClick={() => setClick4(!click4)} className={click4 ? 'commercial2' : 'commercial2-click'}>
                <h1>COMMERCIAL<br/>PROPERTIES</h1>
                <button>View Gallery</button>
                <img src={Commercial} alt="commercial-service"></img>
            </div>
            </DelayLink>
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