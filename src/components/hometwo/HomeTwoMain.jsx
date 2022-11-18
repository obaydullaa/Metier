import React from 'react'
import HomeTwoBanner from './HomeTwoBanner'
import HomeTwoBlog from './HomeTwoBlog'
import HomeTwoFeatures from './HomeTwoFeatures'
import HomeTwoPortfolio from './HomeTwoPortfolio'
import HomeTwoSkill from './HomeTwoSkill'
import HomeTwoSponsors from './HomeTwoSponsors'
import HeaderTwo from '../layouts/header/HeaderTwo'
import FooterHomeTwo from '../layouts/footer/FooterHomeTwo'


function HomeTwoMain() {
  return (
    <>
         {/* <div className="theme-loader">
            <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
            </div>
        </div>  */}
        
        <HeaderTwo/> 
        <HomeTwoBanner/>
        <HomeTwoFeatures/>
        <HomeTwoPortfolio/>
        <HomeTwoSkill/>
        <HomeTwoSponsors />
        <HomeTwoBlog />
        <FooterHomeTwo/>
    </>
  )
}

export default HomeTwoMain