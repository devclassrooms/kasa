import React from 'react'
import  {Link} from "react-router-dom"

function navbar() {
  return (
      <header className='header'>
        <div className='logo'>
          <img className='logo1' src='logo.png' alt='Logo Kasa'/>
        </div>
        <nav className='nav'>
          <Link to="/" className='link__accueil'>
            <p className='link__accueil'> Accueil </p>
          </Link>
          <Link to="/apropos" className='link__apropos'>
            <p className='link__apropos'>A Propos</p>
          </Link>
        </nav>
      </header>
  )
}

export default navbar