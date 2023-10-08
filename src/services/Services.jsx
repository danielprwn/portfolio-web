import React from 'react'
import './services.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <div className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsFillPatchCheckFill className='service__list-icon'/>
              <p>Projects of User Interfaces in Figma </p>
            </li>
            <li>
              <BsFillPatchCheckFill className='service__list-icon'/>
              <p>Accessible and intuitive User Experience </p>
            </li>
            <li>
              <BsFillPatchCheckFill className='service__list-icon'/>
              <p>Useful and friendly User Interfaces</p>
            </li>
            <li>
              <BsFillPatchCheckFill className='service__list-icon'/>
              <p>Landing pages project</p>
            </li>
          </ul>
        </div>
        
        <div className="service">
          <div className="service__head">
            <h3>Web App Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsFillPatchCheckFill className='service__list-icon'/>
              <p>Designing web applications</p>
            </li>
            <li>
              <BsFillPatchCheckFill className='service__list-icon'/>
              <p>Mobile application development - React Native</p>
            </li>
            <li>
              <BsFillPatchCheckFill className='service__list-icon'/>
              <p>Developing progressive web applications PWA</p>
            </li>
            <li>
              <BsFillPatchCheckFill className='service__list-icon'/>
              <p>Creating CMS web applications</p>
            </li>
          </ul>
        </div>

        <div className="article service">
          <div className="service__head">
            <h3>E-commerce Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsFillPatchCheckFill className='service__list-icon'/>
              <p>Reacts JS e-commerce online stores</p>
            </li>
            <li>
              <BsFillPatchCheckFill className='service__list-icon'/>
              <p>React Natice e-commerce online stores</p>
            </li>
            <li>
              <BsFillPatchCheckFill className='service__list-icon'/>
              <p>JavaScript online stores  </p>
            </li>
            <li>
              <BsFillPatchCheckFill className='service__list-icon'/>
              <p>WooCommerce online stores </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Services