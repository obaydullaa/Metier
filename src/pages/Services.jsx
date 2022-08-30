import React from 'react'
import FooterMain from '../components/layouts/footer/FooterMain'
import HeaderMain from '../components/layouts/header/HeaderMain'

function Services() {
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

      <div className="services__page section-padding">
        <div className="container">
          <div className="row mb-60">
            <div className="col-xl-6 col-lg-8">
              <div className="services__page-title lg-t-center">
                <span className="subtitle">Our Services</span>
                <h2>Our Services</h2>
              </div>
            </div>
          </div>
                <div className="row">
                    <div className="col-xl-12 mb-30">
                        <div className="services__page-item">
                            <div className="services__page-item-left">
                                <div className="services__page-item-left-icon">
                                    <img src="assets/img/icon/service-1.png" alt="" />
                                <div className="services__area-item-icon-one">
                                  <img src="assets/img/icon/services-1.png" alt="" />
                                </div>
                                </div>
                                <div className="services__page-item-left-content">
                                    <h4><a href="services-details.html">UI/UX Designing</a></h4>
                                </div>
                            </div>
                            <div className="services__page-item-center">
                                <p>pellentesque in dolor vel malesuada. Donec finibus libero odio, ac iaculis</p>
                            </div>
                            <div className="services__page-item-right">
                                <a href="services-details.html"><i className="fal fa-plus"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-12 mb-30">
                        <div className="services__page-item">
                            <div className="services__page-item-left">
                                <div className="services__page-item-left-icon">
                                    <img src="assets/img/icon/service-2.png" alt="" />
                  <div className="services__area-item-icon-one">
                    <img src="assets/img/icon/services-2.png" alt="" />
                  </div>
                                </div>
                                <div className="services__page-item-left-content">
                                    <h4><a href="services-details.html">Web & apps Development</a></h4>
                                </div>
                            </div>
                            <div className="services__page-item-center">
                                <p>pellentesque in dolor vel malesuada. Donec finibus libero odio, ac iaculis</p>
                            </div>
                            <div className="services__page-item-right">
                                <a href="services-details.html"><i className="fal fa-plus"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-12 mb-30">
                        <div className="services__page-item">
                            <div className="services__page-item-left">
                                <div className="services__page-item-left-icon">
                                    <img src="assets/img/icon/service-3.png" alt="" />
                  <div className="services__area-item-icon-one">
                    <img src="assets/img/icon/services-3.png" alt="" />
                  </div>
                                </div>
                                <div className="services__page-item-left-content">
                                    <h4><a href="services-details.html">Digital  Marketing</a></h4>
                                </div>
                            </div>
                            <div className="services__page-item-center">
                                <p>pellentesque in dolor vel malesuada. Donec finibus libero odio, ac iaculis</p>
                            </div>
                            <div className="services__page-item-right">
                                <a href="services-details.html"><i className="fal fa-plus"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-12">
                        <div className="services__page-item">
                            <div className="services__page-item-left">
                                <div className="services__page-item-left-icon">
                                    <img src="assets/img/icon/service-4.png" alt="" />
                  <div className="services__area-item-icon-one">
                    <img src="assets/img/icon/services-4.png" alt="" />
                  </div>
                                </div>
                                <div className="services__page-item-left-content">
                                    <h4><a href="#">Branding strategy</a></h4>
                                </div>
                            </div>
                            <div className="services__page-item-center">
                                <p>pellentesque in dolor vel malesuada. Donec finibus libero odio, ac iaculis</p>
                            </div>
                            <div className="services__page-item-right">
                                <a href="#"><i className="fal fa-plus"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
      </div>

      <div className="video__area" data-background="assets/img/video-1.jpg">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="video__area-play-icon video-pulse"> <a className="video-popup" href="https://www.youtube.com/watch?v=0WC-tD-njcA"><i className="fas fa-play"></i></a> </div>
            </div>
          </div>
        </div>
      </div>

      <div className="feedback__area section-padding">
          <div className="container">
              <div className="row mb-60">
                  <div className="col-xl-12">
                      <div className="feedback__area-title">
              <span className="subtitle-one">Our Reviews</span>
              <h2>Awesome client Feedback</h2>                         
                      </div>
                  </div>
              </div>
              <div className="row">
                  <div className="col-xl-4 col-lg-6 xl-mb-30">
                      <div className="feedback__area-item">
                          <div className="feedback__area-item-quote">
                              <img src="assets/img/icon/quote.png" alt="" />
                          </div>
                          <div className="feedback__area-item-reviews">
                              <h5>Good :</h5>
                              <ul>
                                  <li><a href="#"><i className="fas fa-star"></i></a></li>
                                  <li><a href="#"><i className="fas fa-star"></i></a></li>
                                  <li><a href="#"><i className="fas fa-star"></i></a></li>
                                  <li><a href="#"><i className="fas fa-star"></i></a></li>
                                  <li><a href="#"><i className="fas fa-star"></i></a></li>
                              </ul>
                          </div>
                          <div className="feedback__area-item-content">
                              <p>pellentesque in dolor vel malesuada. Donec finibus libero odio, ac iaculis metus mattis quis.</p>
                          </div>
                          <div className="feedback__area-item-bottom">
                              <div className="feedback__area-item-bottom-avatar">
                                  <img src="assets/img/avatar/feedback-1.jpg" alt="" />
                              </div>
                              <div className="feedback__area-item-bottom-title">
                                  <h5>david bowie</h5>
                                  <span>UX Designer</span>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 lg-mb-30">
                      <div className="feedback__area-item">
                          <div className="feedback__area-item-quote">
                              <img src="assets/img/icon/quote.png" alt="" />
                          </div>
                          <div className="feedback__area-item-reviews">
                              <h5>Good :</h5>
                              <ul>
                                  <li><a href="#"><i className="fas fa-star"></i></a></li>
                                  <li><a href="#"><i className="fas fa-star"></i></a></li>
                                  <li><a href="#"><i className="fas fa-star"></i></a></li>
                                  <li><a href="#"><i className="fas fa-star"></i></a></li>
                                  <li><a href="#"><i className="fas fa-star"></i></a></li>
                              </ul>
                          </div>
                          <div className="feedback__area-item-content">
                              <p>pellentesque in dolor vel malesuada. Donec finibus libero odio, ac iaculis metus mattis quis.</p>
                          </div>
                          <div className="feedback__area-item-bottom">
                              <div className="feedback__area-item-bottom-avatar">
                                  <img src="assets/img/avatar/feedback-2.jpg" alt="" />
                              </div>
                              <div className="feedback__area-item-bottom-title">
                                  <h5>michel aoun</h5>
                                  <span>Marketing</span>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-xl-4 col-lg-6">
                      <div className="feedback__area-item">
                          <div className="feedback__area-item-quote">
                              <img src="assets/img/icon/quote.png" alt="" />
                          </div>
                          <div className="feedback__area-item-reviews">
                              <h5>Good :</h5>
                              <ul>
                                  <li><a href="#"><i className="fas fa-star"></i></a></li>
                                  <li><a href="#"><i className="fas fa-star"></i></a></li>
                                  <li><a href="#"><i className="fas fa-star"></i></a></li>
                                  <li><a href="#"><i className="fas fa-star"></i></a></li>
                                  <li><a href="#"><i className="fas fa-star"></i></a></li>
                              </ul>
                          </div>
                          <div className="feedback__area-item-content">
                              <p>pellentesque in dolor vel malesuada. Donec finibus libero odio, ac iaculis metus mattis quis.</p>
                          </div>
                          <div className="feedback__area-item-bottom">
                              <div className="feedback__area-item-bottom-avatar">
                                  <img src="assets/img/avatar/feedback-3.jpg" alt="" />
                              </div>
                              <div className="feedback__area-item-bottom-title">
                                  <h5>steve rhodes</h5>
                                  <span>Developer</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <FooterMain />
    </>
  )
}

export default Services