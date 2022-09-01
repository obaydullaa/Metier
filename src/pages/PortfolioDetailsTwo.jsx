import React from 'react'
import FooterMain from '../components/layouts/footer/FooterMain'
import HeaderMain from '../components/layouts/header/HeaderMain'

function PortfolioDetailsTwo() {
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

            <div className="portfolio__details-two section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 lg-mb-30">
                            <div className="portfolio__details-two-left">
                                <div className="portfolio__details-two-left-content">
                                    <h2 className="mb-30">Design and Development</h2>
                                    <p className="mb-20">Maecenas tincidunt hendrerit odio sed consectetur. Duis porta purus sapien, eget pretium augue consectetur ut. Nunc nibh augue, pretium quis imperdiet pellentesque, molestie eget nisi. Sed rutrum sit amet eros ac egestas.</p>
                                    <p>Maecenas tincidunt dolor in massa iaculis, vitae dignissim sem finibus. Pellentesque elementum vel arcu sit amet rhoncus. Nulla at eleifend lorem. Praesent et ex sed metus</p>                            
                                </div>                        
                                <div className="all__sidebar">
                                    <div className="all__sidebar-item details one">
                                        <h4>Portfolio Details</h4>
                                        <div className="all__sidebar-item-details">
                                            <div className="all__sidebar-item-details-list">
                                                <h6>Client :</h6>
                                                <span>ThemeOri agency</span>
                                            </div>
                                            <div className="all__sidebar-item-details-list">
                                                <h6>Category :</h6>
                                                <span>Brochure Design</span>
                                            </div>
                                            <div className="all__sidebar-item-details-list">
                                                <h6>Date :</h6>
                                                <span>27 March, 2022</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8">
                            <div className="row mb-30">
                                <div className="col-sm-6 sm-mb-30">
                                    <img className="img__full" src="assets/img/portfolio/portfolio-22.jpg" alt="" />
                                </div>
                                <div className="col-sm-6">
                                    <img className="img__full" src="assets/img/portfolio/portfolio-8.jpg" alt="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 sm-mb-30">
                                    <img className="img__full" src="assets/img/portfolio/portfolio-23.jpg" alt="" />
                                </div>
                                <div className="col-sm-6">
                                    <img className="img__full" src="assets/img/portfolio/portfolio-12.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
          <FooterMain/>
        </>
    )
}

export default PortfolioDetailsTwo