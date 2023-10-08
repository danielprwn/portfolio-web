import React from 'react'
import './experience.css'
import {ImHtmlFive} from 'react-icons/im'
import {SiCsswizardry} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {RiReactjsLine} from 'react-icons/ri'
import {BsFillBootstrapFill} from 'react-icons/bs'
import {SiMaterialui} from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
import {SiMongodb} from 'react-icons/si'
import {SiFirebase} from 'react-icons/si'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Programming Skills</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front-End Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <ImHtmlFive className="experience__details-icon"/>
              <div>
              <h4>HTML5</h4>
              <small className='text-light'>Advanced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiCsswizardry className="experience__details-icon"/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Advanced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillBootstrapFill className="experience__details-icon"/>
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Advanced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiMaterialui className="experience__details-icon"/>
              <div>
              <h4>Material UI</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiJavascript className="experience__details-icon"/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaReact className="experience__details-icon"/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <RiReactjsLine className="experience__details-icon"/>
              <div>
              <h4>React Native</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
        <h3>Back-End Development</h3>
        <div className="experience__content">
            <article className='experience__details'>
              <FaNodeJs className="experience__details-icon"/>
              <div>
              <h4>NODE JS</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiMongodb className="experience__details-icon"/>
              <div>
              <h4>MONGO DB</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiFirebase className="experience__details-icon"/>
              <div>
              <h4>Firebase</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Experience