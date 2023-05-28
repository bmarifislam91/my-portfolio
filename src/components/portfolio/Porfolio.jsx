import React from 'react';
import IMG6 from '../../assets/portfolio6.jpg'
import './portfolio.css';

const data = [
  {
    id: 1,
    img: "https://arifbooking.netlify.app/static/media/featured2.d383839a562eb2632bd4.webp",
    title: "This is a Portfoli Hotel Booking ",
    github: "https:github.com",
    demo: "https://arifbooking.netlify.app/"
  },
  {
    id: 2,
    img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2021/12/99871876.jpeg?auto=format&q=60&fit=max&w=930",
    title: "This is a Portfolio Social Media",
    github: "https:github.com",
    demo: "https://bmsocialapp.netlify.app/"
  },
  {
    id: 3,
    img: "https://media.licdn.com/dms/image/D5612AQFnY506s0lVlA/article-cover_image-shrink_600_2000/0/1660523886268?e=2147483647&v=beta&t=6COoLa8lubKoAyjj2jh6Hu1QQSq--e_jnJ5z0nneVz4",
    title: "This is a Portfolio Ecommerce",
    github: "https:github.com",
    demo: "https://bmecommerce.netlify.app/"
  },
  {
    id: 4,
    img: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/09/how_to_start_a_travel_blog_-_article_image.jpg",
    title: "This is a Portfolio Blog Site",
    github: "https:github.com",
    demo: "https://bmblog.netlify.app/"
  },
  {
    id: 5,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwxTNky9DNn13CzjXi0Ja7Sq5282sEEUvjDQ&usqp=CAU",
    title: "This is a Portfolio Banking",
    github: "https:github.com",
    demo: "https://bmbanking.netlify.app"
  },
  {
    id: 6,
    img: IMG6,
    title: "This is a portfolio item title",
    github: "https:github.com",
    demo: "https://dribbble.com//Alien_pixels"
  }
]

const Porfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({id, img, title, demo, github}) =>{
          return (
            <article key={id} className="portfolio_item">
          <div className="portfolio_item_img">
            <img src={img} alt="" />
          </div>
          <h3>{title}</h3>
            <div className="portfolio_item_cta">
            <a href={github} className='btn'>Github</a>
            <a href={demo} target='_blank' className='btn btn-primary'>Live Demo</a>
            </div>
        </article>
          )
        })}
        
      </div>
    </section>
  )
}

export default Porfolio