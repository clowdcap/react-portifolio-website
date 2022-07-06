import React from 'react'
import './about.css'
import ME from '../../assets/me-about2.jpg'
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
              <h5>Experiencia</h5>
              <small>1+ Anos trabalhado</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clientes</h5>
              <small>200+ clientes</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projetos</h5>
              <small>80+ projetos concluidos</small>
            </article>
          
          </div>

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Autem voluptas iure sunt sapiente commodi fugiat excepturi 
          repellat dolore ut a tempore quasi magnam, deleniti esse alias 
          inventore nostrum aut consectetur.</p>
        <a className="btn btn-primary" href="#contact">Vamos Conversar</a>
  
        </div>
      </div>


    </section>
  )
}

export default About