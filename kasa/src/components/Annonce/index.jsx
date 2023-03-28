import React from 'react'
import { Link } from "react-router-dom"
import logements from "../../data/index.json"
import './index.css'

function product() {
    return (
        <article className='product_all'>
            <div className='product'>
                {logements.map(logement => {
                    return (
                        <Link key={logement.id} to={`/appartement/${logement.id}`} className='sections' id={logement.id}>
                                <div className='voile'>
                                </div>
                                <img src={logement.cover} alt="cover appartement" className='img__section'></img>
                                <p>{logement.title}</p>

                        </Link>
                    )
                })}
            </div>
        </article>
    )
}

export default product