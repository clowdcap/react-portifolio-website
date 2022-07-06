import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import {AiFillStar} from 'react-icons/ai'
import {AiOutlineStar} from 'react-icons/ai'

const Experience = () => {
  return (
    <section id="experience" className='baixar'>
      
      
      <h5>Essas são as minhas</h5>
      <h2>Habilidades</h2>

      <div className="container experience__container">

        <div className="experience__frontend">
          <h3>Arquiteto e Urbanista</h3>
          <div className="experience__content">
            
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/> 
              <div>
                <h4>Projetos Sustentávels</h4>
                <small className='text-ligth' >Menos impactos ambientais</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/> 
              <div>
                <h4>Acústica e Térmica</h4>
                <small className='text-ligth'>Pensado para melhor qualidade de moradia.</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/> 
              <div>
                <h4>Projetos Arquitetonicos</h4>
                <small className='text-ligth'>Consultorias e Desenvolvimento</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/> 
              <div>
                <h4>Projetos Urbanos</h4>
                <small className='text-ligth'>Consultorias e Desenvolvimento</small>
              </div>

            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/> 
                <div>
                  <h4>Fotorealismo e Modelagem 3D</h4>
                  <small className='text-ligth'>Sketchup, Twinmotion e Unreal Engine</small>
                </div>
            </article>


            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/> 
                <div>
                  <h4>Sistema BIM</h4>
                  <small className='text-ligth'>Revit e AutoCAD</small>
                </div>
            </article>


          </div>
        </div>

        <div className="experience__backend">
        <h3>Desenvolvimento Front-End e Backend</h3>
          <div className="experience__content">
            
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/> 
              <div>
                <h4>HTML 5 e CSS 3</h4>
                <small className='text-ligth'>Pura e com Bootstrap</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/> 
              <div>
                <h4>JavaScript</h4>
                <small className='text-ligth' >Vanilla, JQuery, Node Js e React Native</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/> 
              <div>
                <h4>Bancos de Dados</h4>
                <small className='text-ligth' >Sqlite e MySQL</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/> 
              <div>
                <h4>Python</h4>
                <small className='text-ligth'>Django, PyScript, Web Scraping e PyQt5</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/> 
              <div>
                <h4>Java, PHP, Angular, MongoDB</h4>
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