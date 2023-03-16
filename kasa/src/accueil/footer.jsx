import React from 'react'
import { Link } from 'react-router-dom'

function footer() {
  return (
    <div className='bot'>
        <div className='img_footer'>
          <Link to = "/">
            <img src='logo_footer.png'></img>
          </Link>
        </div>
        <div className='text_footer'>
          <p className='bot_text'> &copy; 2020 Kaza.All rights reserved</p>
        </div>
    </div>
  )
}

export default footer