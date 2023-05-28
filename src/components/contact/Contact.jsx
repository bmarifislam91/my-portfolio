import React from 'react';
import {MdOutlineMail} from 'react-icons/md';
import {RiMessengerLine, RiWhatsappLine} from 'react-icons/ri'
import './contact.css'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contacat_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMail className='contact_option_icon'/>
            <h4>Email</h4>
            <h5>mdarifislam81479@gmail.com</h5>
            <a href="mailto:mdarifislam81479@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className='contact_option_icon'/>
            <h4>Messenger</h4>
            <h5>egatortutorials</h5>
            <a href="https://m.me/bm.arif.370" target="_blank">Sent a message</a>
          </article>
          <article className="contact_option">
            <RiWhatsappLine className='contact_option_icon'/>
            <h4>WhatsApp</h4>
            <h5>+880 1938467991</h5>
            <a href="https://api.whatsapp.com/send?phone=+8801938467991" target="_blank">Sent a message</a>
          </article>
        </div>
      {/* End Of Contact Option */}
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact