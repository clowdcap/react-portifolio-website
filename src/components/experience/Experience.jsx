import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience" className='baixar'>
      
      
      <h5>Essas são as minhas</h5>
      <h2>Habilidades</h2>

      <div className="container experience__container">

        <div className="experience__frontend">
          <h3>Desenvolvimento Frontend</h3>
          <div className="experience__content">
            
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/> 
              <div>
                <h4>HTML 5</h4>
                <small className='text-ligth' >Experiente</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/> 
              <div>
                <h4>CSS 3</h4>
                <small className='text-ligth' >Experiente</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/> 
              <div>
                <h4>JavaScript</h4>
                <small className='text-ligth' >Intermediário</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/> 
              <div>
                <h4>Bootstrap</h4>
                <small className='text-ligth' >Intermediário</small>
              </div>

            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/> 
                <div>
                  <h4>React Native</h4>
                  <small className='text-ligth' >Básico</small>
                </div>
            </article>

          </div>
        </div>

        <div className="experience__backend">
        <h3>Desenvolvimento Backend</h3>
          <div className="experience__content">
            
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/> 
              <div>
                <h4>Python Django</h4>
                <small className='text-ligth' >Intermediário</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/> 
              <div>
                <h4>Node JS</h4>
                <small className='text-ligth' >Básico</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/> 
              <div>
                <h4>Sqlite 3 e MySQL</h4>
                <small className='text-ligth' >Intermediário</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/> 
              <div>
                <h4>PHP</h4>
                <small className='text-ligth' >Básico</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/> 
              <div>
                <h4>MongoDB</h4>
                <small className='text-ligth' >Básico</small>
              </div>
            </article>

          </div>
        </div>

      </div>

    </section>
  )
}

export default Experience