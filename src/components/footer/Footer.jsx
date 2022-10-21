import React from 'react'
import './footer.css'
import {AiFillGithub, AiFillFacebook, AiFillInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>José Marinho</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/clowdcap" target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
        <a href="https://www.facebook.com/jose.marinho0" target="_blank" rel="noopener noreferrer"><AiFillFacebook /></a>
        <a href="https://www.instagram.com/arquitetomarinho/" target="_blank" rel="noopener noreferrer"><AiFillInstagram /></a>
      </div>

      <div className="footer__copyright">
        <small>José Marinho. Todos os direitos reservados.</small>
      </div>
    </footer>
  )
}

export default Footer