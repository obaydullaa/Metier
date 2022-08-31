import React from 'react'
import FooterMain from '../components/layouts/footer/FooterMain'
import HeaderMain from '../components/layouts/header/HeaderMain'

function PortfolioOne() {
    return (
        <>
          <div className="custom__cursor-one"></div>
          <div className="custom__cursor-two"></div>
          {/* <!-- Preloader start -->
          <div classNameName="theme-loader">
            <div classNameName="spinner">
              <div classNameName="double-bounce1"></div>
              <div classNameName="double-bounce2"></div>
            </div>
          </div> */}
          <HeaderMain/>

            <div className="portfolio__column section-padding">
                <div className="container">
                    <div className="row"> 
                        <div className="col-xl-12 mb-30">
                            <div className="portfolio__column-item">
                                <img className="img__full" src="assets/img/portfolio/column-1.jpg" alt="" />
                                <div className="portfolio__column-item-content">
                                    <span>Photography</span>
                                    <h4><a href="portfolio-details-2.html">Photography</a></h4> 
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 mb-30">
                            <div className="portfolio__column-item">
                                <img className="img__full" src="assets/img/portfolio/column-2.jpg" alt="" />
                                <div className="portfolio__column-item-content">
                                    <span>Photography</span>
                                    <h4><a href="portfolio-details-2.html">Photography</a></h4> 
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 mb-30">
                            <div className="portfolio__column-item">
                                <img className="img__full" src="assets/img/portfolio/column-3.jpg" alt="" />
                                <div className="portfolio__column-item-content">
                                    <span>Photography</span>
                                    <h4><a href="portfolio-details-2.html">Photography</a></h4> 
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12 mb-60">
                            <div className="portfolio__column-item">
                                <img className="img__full" src="assets/img/portfolio/column-4.jpg" alt="" />
                                <div className="portfolio__column-item-content">
                                    <span>Photography</span>
                                    <h4><a href="portfolio-details-2.html">Photography</a></h4> 
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12 t-center">
                            <a className="theme-btn-1" href="#">All Project<i className="fal fa-long-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
    
          <FooterMain/>
        </>
    )
}

export default PortfolioOne