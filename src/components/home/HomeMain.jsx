import React from 'react'
import Services from '../../pages/Services'
import FooterMain from '../layouts/footer/FooterMain'
import HeaderMain from '../layouts/header/HeaderMain'
import Features from './Features'
import HeroSection from './HeroSection'
import Video from './Video'
import Work from './Work'

function HomeMain() {
  return (
    <>
        <div className="custom__cursor-one main"></div>
        <div className="custom__cursor-two main"></div>
    
        {/* <div className="theme-loader">
            <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
            </div>
        </div> */}

        <HeaderMain/>
        <HeroSection/>
        <Features/>
        <Services />
        <Video />
        <Work/>
        <FooterMain />
    </>
  )
}

export default HomeMain