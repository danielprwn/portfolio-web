import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {FaAward} from 'react-icons/fa'
import {TbUsers} from 'react-icons/tb'
import {BsFolderCheck} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about image" />
          </div>

        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward  className='about__icon'/>
              <h5>Study</h5>
              <small>Frontend Development</small>
            </article>

            <article className='about__card'>
              <TbUsers  className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ years</small>
            </article>

            <article className='about__card'>
              <BsFolderCheck  className='about__icon'/>
              <h5>Projects</h5>
              <small>30+</small>
            </article>
          </div>
          <p>Programming is my passion. I have been creating web applications projects for over 3 years. I graduated from frontend development with React at Kozminski University in Warsaw - final grade for studies 5. According to the Financial Times ranking - it is a leader in business education in Central and Eastern Europe. The university has three international accreditations: AACSB, AMBA and EQUIS.</p>

            <a href="#contact" className='btn btn-primary'>Contact</a>
        </div>
      </div>
    </section>
  )
}

export default About