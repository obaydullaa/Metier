import React from 'react'
import FooterMain from '../layouts/footer/FooterMain'
import HeaderMain from '../layouts/header/HeaderMain'

function PortfolioThreeMain() {
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

       <div className="portfolio__area-two section-padding">
          <div className="container">
              <div className="row">
                  <div className="col-xl-12 mb-60">
                      <div className="portfolio__area-two-title"> <span className="subtitle-one">Portfolio</span>
                          <h2>Create Portfolio</h2> </div>
                      <div className="portfolio__area-two-btn">
                          <ul>
                              <li className="active" data-filter="*">Show All</li>
                              <li data-filter=".design">Design</li>
                              <li data-filter=".development">Development</li>
                              <li data-filter=".marketing">Marketing</li>
                              <li data-filter=".strategy">Strategy</li>
                              <li data-filter=".branding">Branding</li>
                          </ul>
                      </div>
                  </div>
              </div>
              <div className="row portfolio__area-two-active">
                  <div className="col-xl-4 col-lg-4 col-md-6 portfolio-item mb-30">
                      <div className="portfolio__area-two-item"> <img className="img__full" src="assets/img/portfolio/portfolio-7.jpg" alt="" />
                          <div className="portfolio__area-two-item-content"> <span>Photography</span>
                              <h4><a href="portfolio-details.html">Photography</a></h4> </div>
                      </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 portfolio-item marketing mb-30">
                      <div className="portfolio__area-two-item"> <img className="img__full" src="assets/img/portfolio/portfolio-8.jpg" alt="" />
                          <div className="portfolio__area-two-item-content"> <span>Photography</span>
                              <h4><a href="portfolio-details.html">Photography</a></h4> </div>
                      </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 portfolio-item branding design mb-30">
                      <div className="portfolio__area-two-item"> <img className="img__full" src="assets/img/portfolio/portfolio-9.jpg" alt="" />
                          <div className="portfolio__area-two-item-content"> <span>Photography</span>
                              <h4><a href="portfolio-details.html">Photography</a></h4> </div>
                      </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 portfolio-item development marketing mb-30">
                      <div className="portfolio__area-two-item"> <img className="img__full" src="assets/img/portfolio/portfolio-10.jpg" alt="" />
                          <div className="portfolio__area-two-item-content"> <span>Photography</span>
                              <h4><a href="portfolio-details.html">Photography</a></h4> </div>
                      </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 portfolio-item design mb-30">
                      <div className="portfolio__area-two-item"> <img className="img__full" src="assets/img/portfolio/portfolio-11.jpg" alt="" />
                          <div className="portfolio__area-two-item-content"> <span>Photography</span>
                              <h4><a href="portfolio-details.html">Photography</a></h4> </div>
                      </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 portfolio-item development branding strategy mb-30">
                      <div className="portfolio__area-two-item"> <img className="img__full" src="assets/img/portfolio/portfolio-12.jpg" alt="" />
                          <div className="portfolio__area-two-item-content"> <span>Photography</span>
                              <h4><a href="portfolio-details.html">Photography</a></h4> </div>
                      </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 portfolio-item strategy branding lg-mb-30">
                      <div className="portfolio__area-two-item"> <img className="img__full" src="assets/img/portfolio/portfolio-13.jpg" alt="" />
                          <div className="portfolio__area-two-item-content"> <span>Photography</span>
                              <h4><a href="portfolio-details.html">Photography</a></h4> </div>
                      </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 portfolio-item design lg-mb-30">
                      <div className="portfolio__area-two-item"> <img className="img__full" src="assets/img/portfolio/portfolio-14.jpg" alt="" />
                          <div className="portfolio__area-two-item-content"> <span>Photography</span>
                              <h4><a href="portfolio-details.html">Photography</a></h4> </div>
                      </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 portfolio-item strategy development">
                      <div className="portfolio__area-two-item"> <img className="img__full" src="assets/img/portfolio/portfolio-15.jpg" alt="" />
                          <div className="portfolio__area-two-item-content"> <span>Photography</span>
                              <h4><a href="portfolio-details.html">Photography</a></h4> </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

    <FooterMain/>
  </>
  )
}

export default PortfolioThreeMain