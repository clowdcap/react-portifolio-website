import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>O que você precisa saber</h5>
      <h2>Sobre Mim</h2>

      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Arquitetura</h5>
              <small>10+ projetos reais</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Urbanismo</h5>
              <small>2+ anos trabalhados</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Tecnologia</h5>
              <small>1+ anos de estudo</small>
            </article>
          
          </div>

        <p>Sou arquiteto e urbanista, graduando do Centro Universitario Curitiba (UNICURITIBA), formado em 2022. Entusiasta da tecnologia, sempre me atualizando e elevando a qualidade do meu trabalho</p>
        <a className="btn btn-primary" href="#contact">Vamos Conversar</a>
  
        </div>
      </div>


    </section>
  )
}

export default About