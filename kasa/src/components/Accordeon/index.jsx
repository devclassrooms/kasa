import React, { useState } from 'react'
import flechehaut from '../../images/flechehaut.png'
import flechebas from '../../images/flechebas.png'
import './index.css'

function Accordeon({titre, descriptionInfo, children}) {
    const [isopen, setIsopen] = useState(false); //state 
    return (
    <div className='group_apropos'>
        <div className='group_text'>
            <div className='section_fiabilité'>
                <div className='section_element'>
                    <p>{titre}</p>
                    <img onClick={() => {
                        setIsopen(!isopen);
                    }} src={isopen ? flechehaut : flechebas} alt='fleche'></img>
                </div>
                {isopen && descriptionInfo ? <div className='description_apropos'>
                    <p>{descriptionInfo}</p>
                </div> : null}
                {isopen && children}
            </div>
        </div>
    </div>
  )
}

export default Accordeon