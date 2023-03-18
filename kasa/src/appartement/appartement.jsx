import React from 'react'

function appartement() {
  return (
    <div className='group_appart'>
        <div className='section_image'>
            <img src='img_appartement.png' alt='image appartement' className='img_apart'></img>
        </div>
        <div className='group_appart'>
            <div className='section_title_appart'>
                <div className='h1_appart'>
                    <h1>Cozy loft on the Canal Saint-Martin</h1>
                </div>
                <div className='section_image_et_user'>
                    <div className='nom_user'>
                        <p>Alexandre Dumas</p>
                    </div>
                    <div className='img_du_user'>
                        <img src='img_appartement.png' alt='image appartement' className='img_du_user1'></img>
                    </div>
                </div>
            </div>
            <div className='appart_ville'>
                <p>Paris, Île-de-France</p>
            </div>
        </div>
        <div className='section_canal'>
            <div className='cozy'>
                <p>Cozy</p>
            </div>
            <div className='canal'>
                <p>Canal</p>
            </div>
            <div className='paris'>
                <p>Paris 10</p>
            </div>
            <div className='les_etoiles'>
                <div className='etoile'>etoile</div>
            </div>
        </div>
        <div className='section_description'>
            <div className='group_description'>
                <div className='description'>
                    <p className='description_text'>Description</p>
                </div>
                <div className='le_text_description'>
                    <p>Vous serez à 50m du canal Saint-martin où vous pourrez <br></br> pique-niquer l'été et à côté de nombreux bars et restaurants.<br></br> Au cœur de Paris avec 5 lignes de métro et de nombreux<br></br> bus. Logement parfait pour les<br></br> voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 <br></br>minutes à pied).</p>
                </div>
            </div>
            <div className='group_equipement'>
                <div className='equipement'>
                    <p>Équipements</p>
                </div>
                <div className='le_text_equipement'>
                    <p>Climatisation<br></br>
                        Wi-Fi<br></br>
                        Cuisine<br></br>
                        Espace de travail<br></br>
                        Fer à repasser<br></br>
                        Sèche-cheveux<br></br>
                        Cintres<br></br>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default appartement