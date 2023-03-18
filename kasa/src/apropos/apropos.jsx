import React from 'react'

function apropos() {
  return (
    <div className='group_apropos'>
        <div className='image_apropos'>
            <img src='img_apropos.png' className='image_apropos'></img>
        </div>
        <div className='group_text'>
            <div className='section_fiabilité'>
                <div className='section_element'>
                    <p>Fiabilité</p>
                </div>
                <div className='description_apropos'>
                    <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
                </div>
            </div>
            <div>
                <div className='section_element'>
                    <p>Respect</p>
                </div>
                <div className='description_apropos'>
                    <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                </div>
            </div>
            <div>
                <div className='section_element'>
                    <p>Service</p>
                </div>
                <div className='description_apropos'>
                    <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
                </div>
            </div>
            <div>
                <div className='section_element'>
                    <p>Responsabilité</p>
                </div>
                <div className='description_apropos'>
                    <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default apropos