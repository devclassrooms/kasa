import React from 'react'
import  {Link} from "react-router-dom"

function error404() {
  return (
    <div className='mid_404'>
      <div className='le404'>
        <p>404</p>
      </div>
      <div className='text_404'>
        <p>Oups! La page que vous demandez n'existe pas.</p>
      </div>
      <Link to="/" className='a_404'>
      <div className='text_404_return'>
        <p>Retourner sur la page d’accueil</p>
      </div>
      </Link>
    </div>
  )
}

export default error404