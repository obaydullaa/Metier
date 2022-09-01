import React from 'react'
import FooterMain from '../layouts/footer/FooterMain'
import HeaderMain from '../layouts/header/HeaderMain'
import AboutClient from './AboutClient'
import AboutTeam from './AboutTeam'
import AboutUs from './AboutUs'

function AboutMain() {
    return (
        <>
            <div className="custom__cursor-one"></div>
            <div className="custom__cursor-two"></div>
    
            {/* <div className="theme-loader">
                <div className="spinner">
                    <div className="double-bounce1"></div>
                    <div className="double-bounce2"></div>
                </div>
            </div> */}
    
            <HeaderMain className="all-page"/>
            <AboutUs />
            <AboutTeam />
            <AboutClient />
            <FooterMain/>
    
        </>
      )
}

export default AboutMain