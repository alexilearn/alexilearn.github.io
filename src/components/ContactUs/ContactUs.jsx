import './ContactUs.css';
import { useState, useRef } from 'react';
import InputField from '../InputField/InputField';
import Button from '../Button/Button';
import sendIcon from '../../assets/send.svg';
import emailjs from '@emailjs/browser';

export default function ContactUs() {
    const form = useRef();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });

    const [formErrors, setFormErrors] = useState({
        firstName: false,
        lastName: false,
        email: false,
        message: false,
    });

    function sendMessage(e) {
        e.preventDefault();
        let errors = false;

        for (let key of Object.keys(formData)) {
            if (formData[key] === '') {
                setFormErrors((prevFormErrors) => ({
                    ...prevFormErrors,
                    [key]: true,
                }));
                errors = true;
            }
        }

        if (errors) return;

        emailjs
            .sendForm('service_14jvr8l', 'template_e3tnm0i', form.current, {
                publicKey: 'qGTtfwwwttjo6NwKT',
            })
            .then(
                () => {
                    setFormData({
                        firstName: '',
                        lastName: '',
                        email: '',
                        message: '',
                    });
                },
                (error) => {
                    alert('Sorry! An error occurred sending your message.');
                    console.log('FAILED...', error);
                }
            );
    }

    return (
        <div className="contact-us" id="contact-us">
            <div>
                <h2>Get in touch</h2>
                <p>
                    Need help or want to tell us something? Contact us and we’ll
                    respond soon.
                </p>
                <a href="mailto:iacopo.schianchi@gmail.com">
                    iacopo.schianchi@gmail.com
                </a>
            </div>
            <form className="contact-form" ref={form}>
                <div className="name-input">
                    <InputField
                        name="firstName"
                        value={formData.firstName}
                        setValue={setFormData}
                        placeholder="First name"
                        error={formErrors.firstName}
                        setFormErrors={setFormErrors}
                    />
                    <InputField
                        name="lastName"
                        value={formData.lastName}
                        setValue={setFormData}
                        placeholder="Last name"
                        error={formErrors.lastName}
                        setFormErrors={setFormErrors}
                    />
                </div>
                <InputField
                    name="email"
                    value={formData.email}
                    setValue={setFormData}
                    placeholder="Email"
                    error={formErrors.email}
                    setFormErrors={setFormErrors}
                />
                <InputField
                    name="message"
                    value={formData.message}
                    setValue={setFormData}
                    placeholder="Message"
                    error={formErrors.message}
                    setFormErrors={setFormErrors}
                    multiline
                />
                <Button
                    text="Send"
                    onClick={sendMessage}
                    type="accent"
                    iconSrc={sendIcon}
                    iconAlignment="right"
                />
            </form>
        </div>
    );
}
