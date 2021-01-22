import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { MdClose } from 'react-icons/md';
import './modal.style.css';

export function Modal( {showModal, setShowModal} ) {

    const modalRef = useRef()

    const [isSubmitted, setIsSubmitted] = useState(false);

    const closeModal = e => {
        if(modalRef.current === e.target) {
            setShowModal(false)
        }
    }

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_mdf3umt', 'template_o2e11tk', e.target, 'user_AzXs7fxqXfE4PntwA33XC')
            .then((result) => {
                setIsSubmitted(true);
            }, (error) => {
                console.log(error.text);
            });

            //Reset form once submitted
            e.target.reset()
    }

    return (
        <>
            {showModal ? (
                <div className="modal-bg" ref={modalRef} onClick={closeModal}>
                    <div className="modal-wrapper" showModal={showModal}>
                        <MdClose className="modal-button" aria-label='Close modal' onClick={() => setShowModal(prev => !prev)}/>
                            <div className="modal-contact">
                                <h1 className="modal-contact-title">CONTACT</h1>
                                <div className="modal-contact-info">
                                    <hr/>
                                    <a href="mailto: nathanalmeida@gmail.com"><h3>aaspectacularcleaning@gmail.com</h3></a>
                                    <a href="tel: 7743017959"><h3>508-933-7701</h3></a>
                                </div>
                                <form onSubmit={sendEmail} class="modal-contact-form" id="form">
                                        <div class="modal-form container">
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
                                                <label>Message<span>*</span></label>
                                                <textarea placeholder="Your message.." tabindex="5" name="message" required></textarea>
                                            </fieldset>

                                            <fieldset>
                                                <button className="modal-contact-submit" type="submit" value="submit">Submit Inquiry</button>
                                            </fieldset>
                                            {!isSubmitted ? "" : <h3 className="modal-notify-contact">Inquiry Successfully Submitted<span>*</span></h3>}
                                        </div>
                                </form>
                            </div>
                        </div>
                </div>
            ) : null}
        </>
    )
}
