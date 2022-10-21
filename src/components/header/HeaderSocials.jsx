import React from 'react'
import {AiFillGithub, AiFillInstagram, AiFillFacebook } from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://github.com/clowdcap" target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
        <a href="https://www.facebook.com/jose.marinho0" target="_blank" rel="noopener noreferrer"><AiFillFacebook /></a>
        <a href="https://www.instagram.com/arquitetomarinho/" target="_blank" rel="noopener noreferrer"><AiFillInstagram /></a>
    </div>
  )
}

export default HeaderSocials