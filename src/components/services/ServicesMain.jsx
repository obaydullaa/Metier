import React from 'react'
import FooterMain from '../layouts/footer/FooterMain'
import HeaderMain from '../layouts/header/HeaderMain'
import ServiceFeedback from './ServiceFeedback'
import ServiceSection from './ServiceSection'
import ServiceVideo from './ServiceVideo'

function ServicesMain() {
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
      <ServiceSection />
      <ServiceVideo />
      <ServiceFeedback />
      <FooterMain />
    </>
  )
}

export default ServicesMain