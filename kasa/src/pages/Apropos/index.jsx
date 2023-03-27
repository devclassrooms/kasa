import React from 'react'
import Accordeon from '../../components/Accordeon'
import Banniere from '../../components/Banniere'
import ImageApropos from '../../images/img_apropos.png'

function apropos() {
  return (
    <div>
        <Banniere titre="" image={ImageApropos}/>
        <div className='approp_footer'>
          <Accordeon titre='Fiabilité' descriptionInfo= ' Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'/>
          <Accordeon titre= 'Respect' descriptionInfo= 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' />
          <Accordeon titre= 'Service' descriptionInfo= "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." />
          <Accordeon titre= 'Responsabilité' descriptionInfo="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
        </div>
    </div>
  )
}

export default apropos
