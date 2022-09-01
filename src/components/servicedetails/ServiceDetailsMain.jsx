import React from 'react'
import FooterMain from '../layouts/footer/FooterMain'
import HeaderMain from '../layouts/header/HeaderMain'
import ServiceDetailsSection from './ServiceDetailsSection'

function ServiceDetailsMain() {
  return (
    
    <>
      <div className="custom__cursor-one"></div>
      <div className="custom__cursor-two"></div>
      {/* <!-- Preloader start -->
      <div className="theme-loader">
        <div className="spinner">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
      </div> */}
      <HeaderMain/>
      <ServiceDetailsSection />
      <FooterMain/>

    </>
  )
}

export default ServiceDetailsMain