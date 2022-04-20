import React from 'react'
import services from '../Data/ServicesData'
import Cards from './Cards';
const Services = () => {
  return (
    <>
      <div className="cards">
          <div className="industry">
         <h2 className="header">
           Industries we are serving 
         </h2>
         <p className="action">We have tens of thousands of pre-qualified workers ready to go </p>
         </div>
        <div className="services myScroll">
            {services.map(service   => {
                const {name, icon, categories} = service;
                return (
              <Cards name={name} key={name} icon={icon} categories={categories}/>
                )  
            })}
         </div>
      </div>
     </>
  )
}

export default Services