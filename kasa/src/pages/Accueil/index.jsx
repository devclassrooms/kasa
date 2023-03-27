import React from 'react'
import Banniere from '../../components/Banniere'
import ImageBanniereAccueil from '../../images/image_mid.png' 

function Accueil() {
  return (
    <div>
        <Banniere titre='Chez vous, partout et ailleurs' image={ImageBanniereAccueil}/>
    </div>
  )
}

export default Accueil