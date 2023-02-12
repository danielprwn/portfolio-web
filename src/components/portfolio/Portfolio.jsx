import React from 'react'
import './portfolio.css'
import IMG1 from "../../assets/portfolio1.jpg"
import IMG2 from "../../assets/portfolio2.jpg"
import IMG3 from "../../assets/portfolio3.jpg"
import IMG4 from "../../assets/portfolio4.jpg"
import IMG5 from "../../assets/portfolio5.png"
import IMG6 from "../../assets/portfolio6.jpg"

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Notes App",
    github: "https://github.com/danielprwn/notes-web-app",
  },
  {
    id: 2,
    image: IMG2,
    title: "Amazon Clone",
    github: "https://github.com/danielprwn/react-amazonweb-clone",
  },
  {
    id: 3,
    image: IMG3,
    title: "Memes Website",
    github: "https://github.com/danielprwn/react-memes-webapp",
  },
  {
    id: 4,
    image: IMG4,
    title: "World Countries Website",
    github: "https://github.com/danielprwn/world-countries-app",
  },
  {
    id: 5,
    image: IMG5,
    title: "Google Drive Clone",
    github: "https://github.com/danielprwn/g-drive-clone-project",
  },
  {
    id: 6,
    image: IMG6,
    title: "E-commerce Web",
    github: "https://github.com/danielprwn/ecommerce-react-sanity",
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Selected Projects.</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github}) => {
            return (
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="portfolio-image" />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
                <a href={github} className='btn' target='_blank'>Github</a>
              </div>
            </article>
            )
          })
        }
       
      </div>
    </section>
  )
}

export default Portfolio