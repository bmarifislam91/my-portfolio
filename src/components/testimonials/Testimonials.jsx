import React from 'react';
import AVATAR1 from '../../assets/avatar1.jpg';
import AVATAR2 from '../../assets/avatar2.jpg';
import AVATAR3 from '../../assets/avatar3.jpg';
import AVATAR4 from '../../assets/avatar4.jpg';
import './testimonials.css';

// import Swiper core and required modules
import {  Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




const data = [
  {
    avatar: AVATAR1,
    name: "Azam Khan",
    review: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique deleniti 
    dolores atque delectus, non voluptatum veniam molestias, quidem blanditiis 
    et modi facilis qui cum? Quisquam maiores repudiandae quod animi labore.`
  },
  {
    avatar: AVATAR2,
    name: "Tisara Pr",
    review: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique deleniti 
    dolores atque delectus, non voluptatum veniam molestias, quidem blanditiis 
    et modi facilis qui cum? Quisquam maiores repudiandae quod animi labore.`
  },
  {
    avatar: AVATAR3,
    name: "Tina Snow",
    review: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique deleniti 
    dolores atque delectus, non voluptatum veniam molestias, quidem blanditiis 
    et modi facilis qui cum? Quisquam maiores repudiandae quod animi labore.`
  },
  {
    avatar: AVATAR4,
    name: "Dj barabow",
    review: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique deleniti 
    dolores atque delectus, non voluptatum veniam molestias, quidem blanditiis 
    et modi facilis qui cum? Quisquam maiores repudiandae quod animi labore.`
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container" 
      // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }} >
        {data.map(({avatar, name, review}, index) =>{
          return (
            <SwiperSlide key={index} className="testimonial">
          <div className="clients_avatar">
            <img src={avatar} />
          </div>
          <h5 className='clients_name'>{name}</h5>
            <small className='clients_review'>{review}</small>
        </SwiperSlide>
         
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials