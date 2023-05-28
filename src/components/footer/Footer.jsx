import React from 'react';
import {FaFacebookF, FaInstagram,FaTwitter} from 'react-icons/fa';
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="" className='footer_logo'>BM  ARIF</a>

      <ul className="permalinks">
        <li><a href="">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfoilo</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://m.me/bm.arif.370"><FaFacebookF/></a>
        <a href="https://instagram.com/bm.arif.370"><FaInstagram/></a>
        <a href="https://facebook.com"><FaTwitter/></a>
      </div>

      <div className="footer_copyright">
        <small>&cppy; All Right Reserved By Bm Arif</small>
      </div>
    </footer>
  )
}

export default Footer