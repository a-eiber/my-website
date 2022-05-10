/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { injectStyle } from 'react-toastify/dist/inject-style';

function Contact() {
  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_iglj8hp', 'template_ocir5nz', form.current, 'lRDeCTGKxPHv30KMl').then(
      (result) => {
        console.log(result.text);
        injectStyle();
        toast.success('Your email has been sent!');
        navigate('/');
      },
      (error) => {
        injectStyle();
        toast.error('Something went wrong');
        console.log(error.text);
      }
    );
  };

  return (
    <div className="contact-form">
      <h1>Contact</h1>
      <p>Please use the form below to contact me, and I'll respond as soon as possible.</p>
      <form ref={form} onSubmit={sendEmail} className="form">
        <label htmlFor="user_name">Name:</label>
        <input required type="text" name="user_name" id="user_name" />

        <label htmlFor="user_email">Email:</label>
        <input required type="email" name="user_email" id="user_email" />

        <label htmlFor="message">Message:</label>
        <textarea required name="message" id="message" rows={10} />

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
