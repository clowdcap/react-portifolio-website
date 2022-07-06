import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me2.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Olá, eu sou</h5>
        <h1>José Marinho</h1>
        <h5 className="text-ligth">Arquiteto, Urbanista e Programador</h5>
        
        {/* Importando complemento - CTA  */}
        <CTA />

        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="Eu"/>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header