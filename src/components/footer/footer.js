import React from 'react';
import './footer.style.css';
import facebook from './images/facebook-icon.png';
import google from './images/google-icon.png';
import angies from './images/angies-list-icon.png';

export default function Footer() {

    return (
        <>
        <div className="footer">        
            <div className="social-links text-center">
                <a href="https://g.page/a-a-spectacular-cleaning?share"><img id="google-icon" src={google} alt="google-icon"></img></a>
                <a href="https://www.facebook.com/aaspectacularcleaning"><img id="facebook-icon" src={facebook} alt="facebook-icon"></img></a>
                <a href="https://member.angieslist.com/app/reviews/vrf?serviceProviderId=24656421"><img id="angies-list-icon" src={angies} alt="angies-list-icon"></img></a>
            </div>
            <div className="footer-rights text-center">
                <p>©aaspectacularcleaning.com | All rights reserved.</p>
            </div>
        </div>
        </>
    );
}