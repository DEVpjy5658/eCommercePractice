import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/slider.css'
import React from 'react'

const slider = () => {
  return (
    <div className='s-container'>
        <div className="s-arrow">
          <FontAwesomeIcon icon={faArrowAltCircleLeft} />
        </div>
        <div className="s-arrow">
        <FontAwesomeIcon icon={faArrowAltCircleRight} />
        </div>
    </div>
  )
}

export default slider