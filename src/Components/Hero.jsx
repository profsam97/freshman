import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Hero = () => {
  return (
    <div className="hero">
    <h1>Flexible Staffing <br/>
    at your fingerprints.
    </h1>
    <p>Orgam can help you staff up quickly to meet your business goals</p>

    <button className="btn">Start Hiring 
    <FontAwesomeIcon icon={faArrowRight}/></button>
  </div>
  )
}

export default Hero