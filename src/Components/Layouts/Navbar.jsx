import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Navbar = () => {
  return (
    <>
      <header >
    <div className="logo">
        <p>Orgams</p>
    </div>
    <nav>
        <ul >
             <input type="checkbox" id="checkbox_toggle" />
            <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
            <div className="menu">
            <li><a href="#home">Industry
            <FontAwesomeIcon icon={faCaretDown}/>
            </a>
            <ul className="dropdown">
                <li><a href="#home">Sub-1</a></li>
                <li><a href="#home">Sub-2</a></li>
                <li><a href="#home">Sub-3</a></li>
             </ul>
            </li>
            <li><a href="#home" className="active">Hire</a></li>
            <li><a href="#home">Find Work</a></li>
            <li><a href="#home">Help</a></li>
            </div>
        </ul>
    </nav>
    <button> <a href="#home">Get Started</a> </button>
  </header>
  </>
  )
}

export default Navbar