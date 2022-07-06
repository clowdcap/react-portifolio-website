import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://github.com/clowdcap" target="_blank"><AiFillGithub /></a>
        <a href="https://www.facebook.com/jose.marinho0" target="_blank"><AiFillFacebook /></a>
        <a href="https://www.instagram.com/arquitetomarinho/" target="_blank"><AiFillInstagram /></a>
    </div>
  )
}

export default HeaderSocials