import React from 'react'
import  {Link} from "react-router-dom"

function product() {
  return (
    <article className='product_all'>
        <div className='product'>
            <Link to= "/appartement" className='sections'>
                <div className='sections1'>
                    <div className='img__section'></div>
                    <p>Titre de la location</p>
                </div>
            </Link>
            <Link to= "/appartement" className='sections'>
                <div className='sections1'>
                    <div className='img__section'></div>
                    <p>Titre de la location</p>
                </div>
            </Link>
            <Link to= "/appartement" className='sections'>
                <div className='sections1'>
                    <div className='img__section'></div>
                    <p>Titre de la location</p>
                </div>
            </Link>
            <Link to= "/appartement" className='sections'>
                <div className='sections1'>
                    <div className='img__section'></div>
                    <p>Titre de la location</p>
                </div>
            </Link>
            <Link to= "/appartement" className='sections'>
                <div className='sections1'>
                    <div className='img__section'></div>
                    <p>Titre de la location</p>
                </div>
            </Link>
            <Link to= "/appartement" className='sections'>
                <div className='sections1'>
                    <div className='img__section'></div>
                    <p>Titre de la location</p>
                </div>
            </Link>
        </div>
    </article>
  )
}

export default product