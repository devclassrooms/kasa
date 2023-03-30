import React from 'react'
import  {NavLink} from "react-router-dom"
import imgLogo from '../../images/logo.png'
import './index.css';

function navbar() {
  return (
      <header className='header'>
        <div className='logo'>
          <NavLink to = "/">
            <img className='logo1' src={imgLogo} alt='Logo Kasa'/>
          </NavLink>
        </div>
        <nav className='nav'>
          <NavLink to="/" className='link__accueil'>
            <p className='link__accueil'> Accueil </p>
          </NavLink>
          <NavLink to="/apropos" className='link__apropos'>
            <p className='link__apropos'>A Propos</p>
          </NavLink>
        </nav>
      </header>
  )
}

export default navbar