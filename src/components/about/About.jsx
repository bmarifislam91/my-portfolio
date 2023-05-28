import React from 'react';
import './about.css';
import Me from '../../assets/me-about2.png';
import {FaAward,FaUserFriends,FaRegFolderOpen} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_img">
            <img src={Me} alt="about img" />
          </div>
        </div>

        <div className="about_content">
        <p> Hi, This Is Arif, From Bangladesh, I am a student and I working on web design and development,  
            My Dream, I want to be a good programer, coding is My passion and love, I always love to learn new thinks, pray for me, thanks
            </p>
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Esperience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className='about_card'>
              <FaUserFriends className='about_icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className='about_card'>
              <FaRegFolderOpen className='about_icon'/>
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>

          


            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About