import React from 'react'
import FooterMain from '../layouts/footer/FooterMain'
import HeaderMain from '../layouts/header/HeaderMain'
import HeroSection from './HeroSection'
import HomeWork from './HomeWork'
import HomeFeatures from './HomeFeatures'
import HomeServices from './HomeServices'
import HomeVideo from './HomeVideo'

function HomeMain() {
  return (
    <>
    
        {/* <div className="theme-loader">
            <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
            </div>
        </div> */}

        <HeaderMain/>
        <HeroSection/>
        <HomeFeatures/>
        <HomeServices />
        <HomeVideo />
        <HomeWork/>
        <FooterMain />
    </>
  )
}

export default HomeMain