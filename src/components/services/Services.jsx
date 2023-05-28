import React from 'react';
import {MdDesignServices,MdCodeOff} from 'react-icons/md';
import {CgWebsite} from 'react-icons/cg';
import {GoDeviceMobile} from 'react-icons/go';
import {RiMiniProgramFill} from 'react-icons/ri';


import './services.css'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
          <div className="serviceIcon"><MdDesignServices/></div>
          <h3>UI/UX Design</h3>
          </div>
          <div className='service_list'>
          
          
            <h4>I will design any website with highly 
              attention full fresh hand coding is my power
               a nice design can improve your business quality
               </h4>
          </div>
        </article>

        {/* END OF UI UX */}
        <article className="service">
          <div className="service_head">
          <div className="serviceIcon"><MdCodeOff/></div>
            <h3>Web Design</h3>
          </div>

          <div className='service_list'>
          
            <h4>I can build any website for you,
               good and beautiful with complete fresh hand coding
                to help you grow your business.
               </h4>
          </div>
        </article>
    {/* WEB DEVELOPMENT END */}

    <article className="service">
          <div className="service_head">
          <div className="serviceIcon"><CgWebsite/></div>
            <h3>Responsive Design</h3>
          </div>

          <div className='service_list'>
            <h4>I can make any website fully responsive with
               great attention responsive essential for your
                business and to improve quality
               </h4>
          </div>
            </article>


            <article className="service">
          <div className="service_head">
          <div className="serviceIcon"><GoDeviceMobile/></div>
            <h3>Portfolio Design</h3>
          </div>

          <div className='service_list'>
            <h4>I can create a personal professional 
              portfolio for you to showcase your business and yourself.
               </h4>
          </div>
            </article>

            <article className="service">
          <div className="service_head">
          <div className="serviceIcon"><RiMiniProgramFill/></div>
            <h3>Web Development</h3>
          </div>

          <div className='service_list'>
            <h4>I can make you any good and beautiful 
              website with modern language which you can develop later to make it even better.
               </h4>

          </div>
            </article>

            <article className="service">
          <div className="service_head">
          <div className="serviceIcon"><RiMiniProgramFill/></div>
            <h3>Fix Html & Css Bug</h3>
          </div>

          <div className='service_list'>
            <h4>I have a lot of experience in solving HTML CSS problems,
               if you have any problem you may knock me
               </h4>

          </div>
            </article>
      </div>
    </section>
  )
}

export default Services