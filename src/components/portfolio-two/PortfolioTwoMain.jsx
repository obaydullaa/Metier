import React from 'react'
import FooterMain from '../layouts/footer/FooterMain'
import HeaderMain from '../layouts/header/HeaderMain'

function PortfolioTwoMain() {
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

      <div className="portfolio__column-two section-padding">
          <div className="container">
              <div className="row"> 
                  <div className="col-xl-6 col-md-6 mb-30">
                      <div className="portfolio__column-two-item">
                          <img className="img__full" src="assets/img/portfolio/portfolio-16.jpg" alt="" />
                          <div className="portfolio__column-two-item-content">
                              <span>Photography</span>
                              <h4><a href="portfolio-details.html">Photography</a></h4> 
                          </div>
                      </div>
                  </div>
                  <div className="col-xl-6 col-md-6 md-mb-30">
                      <div className="portfolio__column-two-item">
                          <img className="img__full" src="assets/img/portfolio/portfolio-17.jpg" alt="" />
                          <div className="portfolio__column-two-item-content">
                              <span>Photography</span>
                              <h4><a href="portfolio-details.html">Photography</a></h4> 
                          </div>
                      </div>
                  </div>
                  <div className="col-xl-6 col-md-6 mb-30">
                      <div className="portfolio__column-two-item">
                          <img className="img__full" src="assets/img/portfolio/portfolio-18.jpg" alt="" />
                          <div className="portfolio__column-two-item-content">
                              <span>Photography</span>
                              <h4><a href="portfolio-details.html">Photography</a></h4> 
                          </div>
                      </div>
                  </div>
                  <div className="col-xl-6 col-md-6 md-mb-30">
                      <div className="portfolio__column-two-item">
                          <img className="img__full" src="assets/img/portfolio/portfolio-19.jpg" alt="" />
                          <div className="portfolio__column-two-item-content">
                              <span>Photography</span>
                              <h4><a href="portfolio-details.html">Photography</a></h4> 
                          </div>
                      </div>
                  </div>
                  <div className="col-xl-6 col-md-6 md-mb-30">
                      <div className="portfolio__column-two-item">
                          <img className="img__full" src="assets/img/portfolio/portfolio-20.jpg" alt="" />
                          <div className="portfolio__column-two-item-content">
                              <span>Photography</span>
                              <h4><a href="portfolio-details.html">Photography</a></h4> 
                          </div>
                      </div>
                  </div>
                  <div className="col-xl-6 col-md-6">
                      <div className="portfolio__column-two-item">
                          <img className="img__full" src="assets/img/portfolio/portfolio-21.jpg" alt="" />
                          <div className="portfolio__column-two-item-content">
                              <span>Photography</span>
                              <h4><a href="portfolio-details.html">Photography</a></h4> 
                          </div>
                      </div>
                  </div>
                  <div className="col-xl-12 mt-60 t-center">
                      <a className="theme-btn-1" href="#">All Project<i className="fal fa-long-arrow-right"></i></a>
                  </div>
              </div>
          </div>
      </div>

    <FooterMain/>
  </>
  )
}

export default PortfolioTwoMain