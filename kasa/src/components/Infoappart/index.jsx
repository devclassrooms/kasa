import React from 'react'
import etoileOrange from '../../images/etoileorange.png'
import etoileGris from '../../images/etoilegris.png'

function infoAppart({titreAppart, nomPrenom, imageUser, nomVille, cozy, rate, arondissement }){
  return (
    <div className='group_appart'>
            <div className=' group_information'>
                <div className='section_title_appart'>
                    <div className='h1_appart'>
                        <h1>{titreAppart}</h1>
                    </div>
                    <div className='section_image_et_user'>
                        <div className='nom_user'>
                            <p>{nomPrenom}</p>
                        </div>
                        <div className='img_du_user'>
                            <img src={imageUser} alt='image appartement' className='img_du_user1'></img>
                        </div>
                    </div>
                </div>
                <div className='appart_ville'>
                    <p>{nomVille}</p>
                </div>
            </div>
            <div className='section_canal'>
                {cozy.map((cozy) => (
                    <div key={cozy} className='cozy'>
                        <p>{cozy}</p>
                    </div>
                ))}
                <div className='les_etoiles'>
                    <div className='etoile'>
                        <div className='group_etoiles'>
                        {Array(rate).fill().map((r,i) =>(
                            <img key={`colored-${i}`} src={etoileOrange}></img>
                        ))}
                        {Array(5 - rate).fill().map((r,i) =>(
                            <img key={`grayed-${i}`} src={etoileGris}></img>
                        ))}
                        </div>
                    <div className='section_image_et_user_mobile'>
                        <div className='nom_user'>
                            <p>{nomPrenom}</p>
                        </div>
                        <div className='img_du_user'>
                            <img src={imageUser} alt='image appartement' className='img_du_user1'></img>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
    </div>
  )
};

export default infoAppart