import React, { useState } from 'react'
import flechedroit from '../../images/flechedroite.png';
import flechegauche from '../../images/flechegauche.png';

function ImgApart({imagesAppart}) {
    const [imgIndex, setImgIndex] = useState(0);
    function goPrevious()
    {
        if(imgIndex === 0)
        {
            setImgIndex(imagesAppart.length - 1) 
        }
        else
            setImgIndex(imgIndex - 1)
    }
    function goNext()
    {
        if(imgIndex === imagesAppart.length - 1)
        {
            setImgIndex(0) 
        }
        else
            setImgIndex(imgIndex + 1)
    }
    return (
        <div className='section_image'>
                <img src={imagesAppart[imgIndex]} alt='image appartement' className='img_apart'></img>
                { imagesAppart.length > 1 && 
                    <div className='fleches'>
                        <img onClick={goPrevious} src={flechegauche} alt='image appartement' className='gauche'></img>
                        <img onClick={goNext} src={flechedroit} alt='image appartement' className='droite'></img>
                        <p className='nbrPhoto'>{imgIndex + 1}/{imagesAppart.length}</p>
                    </div>
                }
        </div>
    )
}

export default ImgApart