import React from 'react'
import logoImg from '../../images/userAsset/NavLogo.jpg'
const name = process.env.NAME

export default function Navbar () {
  return (
    <div className='navbar'>
      <div className='logo-container'>
        <img src={logoImg} className='logo' />
        <div className='logo-text'>ay Prajapati</div>
      </div>
      <div className='nav-items'>
        <div>
          <a href='#projects'>Projects</a>
        </div>
        <div>
          <a href='#skills'>Skills</a>
        </div>
        <div>
          <a href='#contactme'>Contact Me</a>
        </div>
      </div>
    </div>
  )
}
