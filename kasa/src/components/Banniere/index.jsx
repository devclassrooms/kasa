import React from 'react'
import './index.css'

function Banniere({titre, image}) {
  return (
    <div className='thebody'>
        <div className='section_1'>
            <div className='mask_group'>
              <p className='text_accueil'>{titre}</p>
              <img src={image} alt='image banniere'/>
            </div>
        </div>
    </div>
  )
}

export default Banniere