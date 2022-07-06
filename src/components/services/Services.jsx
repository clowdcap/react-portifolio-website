import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>Todos os meus</h5>
      <h2>Serviços</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Arquiteto e Urbanista</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Desenvolvimento de projetos residenciais e comerciais</p>  
            </li>

            <li>
              <BiCheck className="service__list-icon"/>
              <p>Consultoria em projetos para aprovação de Prefeitura</p>  
            </li>

            <li>
              <BiCheck className="service__list-icon"/>
              <p>Soluções para projetos com ênfase na sustentabilidade</p>  
            </li>

            <li>
              <BiCheck className="service__list-icon"/>
              <p>Entrevistas para Briefing e Brainstorm mais completos</p>  
            </li>

            <li>
              <BiCheck className="service__list-icon"/>
              <p>Utilização do Sistema BIM em nossos projetos</p>  
            </li>
            
          </ul>

        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Desenvolvimento de landing pages, portifolios, blogs e sistemas em geral</p>  
            </li>

            <li>
              <BiCheck className="service__list-icon"/>
              <p>Soluções tecnologicas e com constante atualizações na área</p>  
            </li>

            <li>
              <BiCheck className="service__list-icon"/>
              <p>Utilização de Python e JavaScript como linguagens princiais</p>  
            </li>
          </ul>

        </article>

        <article className="service">
          <div className="service__head">
            <h3>Render e Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Modelagem 3D de ambientes</p>  
            </li>

            <li>
              <BiCheck className="service__list-icon"/>
              <p>Renderização em motores gráficos da Epic Games</p>  
            </li>

            <li>
              <BiCheck className="service__list-icon"/>
              <p>Consultoria de projetos de maquetes eletronicas</p>  
            </li>

            <li>
              <BiCheck className="service__list-icon"/>
              <p>Utilização dos softwares atualizados</p>  
            </li>
          </ul>

        </article>


      </div>

    </section>
  )
}

export default Services