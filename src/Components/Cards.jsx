import { faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const Cards = (props) => {
    const {name, icon, categories} = props;
  return ( 
      <>
        <div className="content content-1">
             {/* <FontAwesomeIcon icon={faHospital} className='fab'/> */}
           {/* <i class="fab fa-solid fa-hospital"></i> */}
           {icon}
           <div className='content_details'>
           <h2>
            {name}  
               </h2>
               <ul className="lists">
                {categories?.map(category => {
                    return (
            <li key={category}>
               <FontAwesomeIcon icon={faCheck}  /> {category}</li>
                )})}
               </ul>
               <div className='anchor'>
               <a href="#home" >
                  <span className="learn">Learn More</span>  
                    <FontAwesomeIcon icon={faArrowRight}  className='i'/> </a>
                    </div>
                    </div>
            </div>
               </>
  )
}

export default Cards