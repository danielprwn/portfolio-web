import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'

const HeaderSocialMedia = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/daniel-95567968/' target="_blank"> <BsLinkedin className='header__socials-icon'/></a>
        <a href='https://github.com/danielprwn' target="_blank"><BsGithub className='header__socials-icon'/></a>
    </div>
  )
}

export default HeaderSocialMedia