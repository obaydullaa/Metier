import React from 'react'
import FooterMain from '../layouts/footer/FooterMain'
import HeaderThree from '../layouts/header/HeaderThree'
import HomeThreeBanner from './HomeThreeBanner'
import HomeThreeContact from './HomeThreeContact'
import HomeThreePortfolio from './HomeThreePortfolio'
import HomeThreeReviews from './HomeThreeReviews'
import HomeThreeSkill from './HomeThreeSkill'
import HomeThreeSponsors from './HomeThreeSponsors'


function HomeThreeMain() {
  return (
    <>
          <div className="custom__cursor-one "></div>
        <div className="custom__cursor-two "></div>


        {/* <div classNameName="theme-loader">
            <div classNameName="spinner">
                <div classNameName="double-bounce1"></div>
                <div classNameName="double-bounce2"></div>
            </div>
        </div> */}

        <HeaderThree/>
        <HomeThreeBanner/>
        <HomeThreeSkill />
        <HomeThreePortfolio />
        <HomeThreeSponsors />
        <HomeThreeReviews />
        <HomeThreeContact />
        <FooterMain/>
    </>
  )
}

export default HomeThreeMain