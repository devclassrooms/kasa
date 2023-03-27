import React from 'react'
import { Link } from "react-router-dom"
import logements from "../../data/index.json"

function product() {
    return (
        <article className='product_all'>
            <div className='product'>
                {logements.map(logement => {
                    return (
                        console.log(logement.id),
                        <Link to={`/appartement/${logement.id}`} className='sections' id={logement.id}>
                            <div className='sections1'>
                                <div className='img__section'>
                                    <img src={logement.cover}></img>
                                </div>
                                <p>{logement.title}</p>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </article>
    )
}

export default product