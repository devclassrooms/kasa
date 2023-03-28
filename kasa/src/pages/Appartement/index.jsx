import React from 'react'
import Infoappart from '../../components/Infoappart'
import Accordeon from '../../components/Accordeon'
import { useLocation, useParams } from 'react-router-dom';
import fichieJson from '../../data/index.json'
import Imgapart from '../../components/ImgApart';
import './index.css'

function Appartement() {
  
  const {id} = useParams();
  const elementsAppart = fichieJson.filter((appart) => appart.id === id)
  let abc1 = Number(elementsAppart[0].rating)
  console.log("-",elementsAppart[0].rating, abc1)
  return (
    <div className='appart_d'>
      <Imgapart imagesAppart={elementsAppart[0].pictures}/>
      <div className='group_appart'>
          <div>
              <Infoappart titreAppart = {elementsAppart[0].title}
              nomPrenom = {elementsAppart[0].host.name} imageUser= {elementsAppart[0].host.picture} nomVille= {elementsAppart[0].location}
              cozy={elementsAppart[0].tags}rate={abc1} arondissement={elementsAppart[0].tags[2]} />
          </div>
          <div className='section_description'>
              <div className='accordeon_e'>
                <Accordeon titre='Description' descriptionInfo={elementsAppart[0].description}/>
              </div>
                <div className='accordeon_z'>
              <Accordeon titre='Équipements' descriptionInfo={elementsAppart[0].equipments}/>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Appartement
