import React from 'react'
import CompanyList from './CompanyList'
import Hero from './Hero'
import Navbar from './Layouts/Navbar'
import Services from './Services'

const Main = () => {
  return (
      <>
     <div className="body">
        {/* //Navbar-start */}
      <Navbar/>
    {/* //Navbar-end */}
    {/* /* header */ }
    {/* Hero start */}
    <Hero/>
    {/* Hero end */}
    {/* Company List start */}
    <CompanyList/>
    {/* Company List end */}
    {/* Services start */}
    <Services/>
    {/* Services end */}
</div>
</>
  )
}

export default Main