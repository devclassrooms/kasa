import React from 'react'

function navbar() {
  return (
    <header className='header'>
      <div className='logo'>
        <img className='logo1' src='logo.png' alt='Logo Kasa'/>
      </div>
      <nav className='nav'>
        <a href='#' className='link__accueil'> Accueil </a>
        <a href='#' className='link__apropos'>A Propos</a>
      </nav>
    </header>

  )
}

export default navbar