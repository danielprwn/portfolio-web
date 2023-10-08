import React from 'react'
import './footer.css'
import {FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>D.Prwn Frontend Development</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/danielprwn"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/daniel-95567968/"><FaLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small> D.Prwn. &copy; All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer