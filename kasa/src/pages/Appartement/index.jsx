import React from 'react'
import Infoappart from '../../components/Infoappart'
import Accordeon from '../../components/Accordeon'
import { useParams } from 'react-router-dom';
import fichieJson from '../../data/index.json'
import Imgapart from '../../components/ImgApart';
import './index.css'

function Appartement() {
  
  const {id} = useParams();
  const elementsAppart = fichieJson.find((appart) => appart.id === id)
  let abc1 = Number(elementsAppart.rating)
  return (
    <div className='appart_d'>
      <Imgapart imagesAppart={elementsAppart.pictures}/>
      <div className='group_appart'>
          <div>
              <Infoappart titreAppart = {elementsAppart.title}
              nomPrenom = {elementsAppart.host.name} imageUser= {elementsAppart.host.picture} nomVille= {elementsAppart.location}
              cozy={elementsAppart.tags}rate={abc1} arondissement={elementsAppart.tags[2]} />
          </div>
          <div className='section_description'>
              <div className='accordeon_e'>
                <Accordeon titre='Description' descriptionInfo={elementsAppart.description}/>
              </div>
              <div className='accordeon_z'>
                <Accordeon titre='Équipements'>
                  <div className='equipeSpan description_apropos'>
                    {elementsAppart.equipments.map((equipe) => <span key={equipe}>{equipe}</span>)}
                  </div>
                </Accordeon>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Appartement
