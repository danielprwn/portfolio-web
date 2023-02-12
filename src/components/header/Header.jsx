import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocialMedia from './HeaderSocialMedia'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hi! My name is</h5>
        <h1>Daniel Purwin</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSocialMedia />

        <div className="me">
          <img src={ME} alt="Daniel" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header