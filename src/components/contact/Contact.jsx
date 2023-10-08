import React, { useRef } from 'react';
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wlj45xe', 'template_2y1fu8i', form.current, 'sv1FTzBAzsg5ITino')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">

        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon'/>
            <h4>E-mail</h4>
            <h5>purwin.daniel@gmail.com</h5>
            <a href="mailto:purwin.daniel@gmail.com" target="_blank">Send e-mail!</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+48 511011183</h5>
            <a href="https://wa.me/511011183" target="_blank">Send message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Name' required />
          <input type="text" name='email' placeholder='Your E-mail' required />
          <textarea name='message' id='' rows="7" placeholder='Your message here...' required/>
          <button type="submit" className='btn btn-primary'>Send Message!</button>
        </form>
        
      </div>
    </section>
  )
}

export default Contact