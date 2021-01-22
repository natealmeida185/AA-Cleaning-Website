import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './apply.style.css';

export default function Apply() {

    const [isSubmitted, setIsSubmitted] = useState(false);

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_mdf3umt', 'template_39szsrc', e.target, 'user_AzXs7fxqXfE4PntwA33XC')
            .then((result) => {
                setIsSubmitted(true);
            }, (error) => {
                console.log(error.text);
            });

            //Reset form once submitted
            e.target.reset()
    }

    return (
        <div className="apply container">
            <h1 className="apply-title">Employment Application</h1>
            <form onSubmit={sendEmail} class="application-form" id="form">
                    <div class="application-form container">
                        <fieldset>
                            <label>Full Name<span>*</span></label><input placeholder="Your name.." type="text" name="name" tabindex="1" required />
                        </fieldset>

                        <fieldset>
                            <label>Phone Number<span>*</span></label><input placeholder="Your phone number.." type="text" name="phone" tabindex="2" required />
                        </fieldset>
                    
                        <fieldset>
                            <label>Email Address<span>*</span></label><input placeholder="Your email address.." type="email" name="email" tabindex="2" required />
                        </fieldset>
                    
                        <fieldset>
                            <label>Work History / Experience<span>*</span></label>
                            <textarea placeholder="Type work history here.." tabindex="5" name="experience" required></textarea>
                        </fieldset>

                        <fieldset>
                            <label>Professional References<span>*</span></label>
                            <textarea placeholder="Provide up to three references.." tabindex="5" name="references" required></textarea>
                        </fieldset>

                        <fieldset className="transportation">
                            <label>Reliable Transportation</label>&nbsp;&nbsp;
                            <input type="radio" name="transportation" value="yes" /> Yes
                            &nbsp;
                            <input type="radio" name="transportation" value="no" /> No<span>*</span>
                        </fieldset>

                        <fieldset className="license">
                            <label>Valid Drivers License</label>&nbsp;&nbsp;
                            <input type="radio" name="license" value="yes" /> Yes
                            &nbsp;
                            <input type="radio" name="license" value="no" /> No<span>*</span> 
                        </fieldset>

                        <fieldset>
                            <button className="apply-submit" type="submit" value="submit">Submit Application</button>
                        </fieldset>
                        {!isSubmitted ? "" : <h3 className="notify-apply">Application Successfully Submitted!<span>*</span></h3>}
                    </div>
            </form>
        </div>
    )
}