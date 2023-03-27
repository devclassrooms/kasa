import React, { useState } from 'react'
import flechehaut from '../../images/flechehaut.png'
import flechebas from '../../images/flechebas.png'

function Accordeon({titre, descriptionInfo}) {
    const [isopen, setIsopen] = useState(false); //state 
    return (
    <div className='group_apropos'>
        <div className='group_text'>
            <div className='section_fiabilité'>
                <div className='section_element'>
                    <p>{titre}Fiabilité</p>
                    <img onClick={() => {
                        setIsopen(!isopen);
                    }} src={isopen ? flechehaut : flechebas} alt='fleche'></img>
                </div>
                {isopen ? <div className='description_apropos'>
                    <p>{descriptionInfo}</p>
                </div> : null}
            </div>
        </div>
    </div>
  )
}

export default Accordeon