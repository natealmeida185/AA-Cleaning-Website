import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import './modal.style.css';

const Background = styled.div` 
    position: fixed;
    margin-top: 75px;
    width: 100%;
    height: 100%;
    min-height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalWrapper = styled.div`
    position: absolute;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    color: #000;
    z-index: 10;
    height: 600px;

    @media (min-width: 1920px) {
        width: 30%;
    }
    @media (max-width: 1920px) {
        width: 30%;
    }
    @media (max-width: 1680px) {
        width: 30%;
    }
    @media (max-width: 1440px) {
        width: 40%;
    }
    @media (max-width: 1080px) {
        width: 60%;
    }
    @media (max-width: 800px) {
        width: 80%;
    }


    @media (max-height: 720px) {
        height: 500px;
        overflow-y: scroll;
    }
    @media (max-height: 650px) {
        height: 400px;
        overflow-y: scroll;
    }
    @media (max-height: 550px) {
        height: 300px;
        overflow-y: scroll;    
    }
    @media (max-height: 450px) {
        height: 200px;
        overflow-y: scroll;
    }
    @media (max-height: 350px) {
        height: 100px;
        overflow-y: scroll;
    }
    @media (max-height: 250px) {
        height: 50px;
        overflow-y: scroll;
    }
`;

const CloseModalButton = styled(MdClose)`
    margin: 0;
    padding: 0;
    font-size: 1.8em;
    cursor: pointer;
    top: -279px;
    float: right;
    z-index: 10;
`;

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
                <Background ref={modalRef} onClick={closeModal}>
                    <ModalWrapper showModal={showModal}>
                        <CloseModalButton aria-label='Close modal' onClick={() => setShowModal(prev => !prev)}/>
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
                        </ModalWrapper>
                </Background>
            ) : null}
        </>
    )
}
