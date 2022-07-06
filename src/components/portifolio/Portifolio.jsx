import React from 'react'
import './portifolio.css'
import {AiFillGithub} from 'react-icons/ai'

import IMG1 from './../../assets/portfolio1.jpg'
import IMG2 from './../../assets/portfolio2.jpg'
import IMG3 from './../../assets/portfolio3.jpg'
import IMG4 from './../../assets/portfolio4.jpg'
import IMG5 from './../../assets/portfolio5.png'
import IMG6 from './../../assets/portfolio6.jpg'


const data = [
  {
    id: 1,
    imagem: IMG1,
    titulo: 'Crypto',
    link: '#',
    demo: '#'
  },

  {
    id: 2,
    imagem: IMG2,
    titulo: 'Crypto',
    link: '#',
    demo: '#'
  },

  {
    id: 3,
    imagem: IMG3,
    titulo: 'Crypto',
    link: '#',
    demo: '#'
  },

  {
    id: 4,
    imagem: IMG4,
    titulo: 'Crypto',
    link: '#',
    demo: '#'
  },

  {
    id: 5,
    imagem: IMG5,
    titulo: 'Crypto',
    link: '#',
    demo: '#'
  },

  {
    id: 6,
    imagem: IMG6,
    titulo: 'Crypto',
    link: '#',
    demo: '#'
  }

]


const Portifolio = () => {
  return (
    <section id="portifolio">
      <h5>Esse é o meu</h5>
      <h2>Portifólio</h2>

      <div className="container portfolio__container">
        
      {
        data.map(({id, imagem, titulo, link, demo}) => {
          return (
            
            <article key={id} className='portfolio__item' >
            <div className="portfolio__item-image">
              <img src={imagem} alt={titulo} />
            </div>
            <h3>{titulo}</h3>
            <div className="portfolio__item-cta">
              <a href={link} className='btn' target="_blank">Github</a>
              <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
            </div>
          </article>
          )
        })
      }

      </div>
    </section>
  )
}

export default Portifolio