import React from 'react'
import FooterHome from '../components/layouts/footer/FooterHome'
import HeaderMain from '../components/layouts/header/HeaderMain'

function Home() {
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

        <div className="banner__area" data-background="assets/img/banner.png">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="banner__area-content">
                            <h1>Create your <span>Portfolio</span></h1> <a className="theme-btn" href="portfolio-3.html">All Project <i className="fal fa-long-arrow-right"></i></a> </div>
                    </div>
                </div>
            </div>
            <div className="banner__area-bottom">
                <div className="banner__area-bottom-icon">
                    <ul>
                        <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fab fa-behance"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="features__area">
            <div className="container-fluid px-0">
                <div className="row gx-0">
                    <div className="col-xl-12">
                        <div className="swiper features-slider">
                            <div className="swiper-wrapper">
                                <div className="features__area-item swiper-slide"> <img src="assets/img/features-1.jpg" alt="" />
                                    <div className="features__area-item-content">
                                        <div className="features__area-item-content-icon"> <a href="services-details.html"><i className="fal fa-plus"></i></a> </div>
                                        <h3><a href="services-details.html">Product Design</a></h3>
                                        <p>Design strategy</p>
                                    </div>
                                </div>
                                <div className="features__area-item features__area-item-hover swiper-slide"> <img src="assets/img/features-2.jpg" alt="" />
                                    <div className="features__area-item-content">
                                        <div className="features__area-item-content-icon"> <a href="services-details.html"><i className="fal fa-plus"></i></a> </div>
                                        <h3><a href="services-details.html">Product Design</a></h3>
                                        <p>Design strategy</p>
                                    </div>
                                </div>
                                <div className="features__area-item swiper-slide"> <img src="assets/img/features-3.jpg" alt="" />
                                    <div className="features__area-item-content">
                                        <div className="features__area-item-content-icon"> <a href="services-details.html"><i className="fal fa-plus"></i></a> </div>
                                        <h3><a href="services-details.html">Product Design</a></h3>
                                        <p>Design strategy</p>
                                    </div>
                                </div>
                                <div className="features__area-item swiper-slide"> <img src="assets/img/features-4.jpg" alt="" />
                                    <div className="features__area-item-content">
                                        <div className="features__area-item-content-icon"> <a href="services-details.html"><i className="fal fa-plus"></i></a> </div>
                                        <h3><a href="services-details.html">Product Design</a></h3>
                                        <p>Design strategy</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="services__area section-padding" data-background="assets/img/services.png">
            <div className="container">
                <div className="row mb-60">
                    <div className="col-xl-12">
                        <div className="services__area-title lg-t-center"> 
                            <span className="subtitle one">Our Services</span>
                            <h2>Our Services</h2> </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 mb-30">
                        <div className="services__area-item"> 
                            <span>01</span>
                            <div className="services__area-item-icon">
                                <img src="assets/img/icon/services-11.png" alt="" />
                                <div className="services__area-item-icon-one">
                                    <img src="assets/img/icon/services-1.png" alt="" />
                                </div>
                            </div>
                            <div className="services__area-item-content">
                                <h4><a href="services-details.html">Designing</a></h4>
                                <p>Praesent vitae augue sem. Phasellus pretium eu ipsum sit amet interdum.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 md-mb-30">
                        <div className="services__area-item"> 
                            <span>02</span>
                            <div className="services__area-item-icon">
                                <img src="assets/img/icon/services-22.png" alt="" />
                                <div className="services__area-item-icon-one">
                                    <img src="assets/img/icon/services-2.png" alt="" />
                                </div>
                            </div>
                            <div className="services__area-item-content">
                                <h4><a href="services-details.html">Development</a></h4>
                                <p>Praesent vitae augue sem. Phasellus pretium eu ipsum sit amet interdum.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 md-mb-30">
                        <div className="services__area-item"> 
                            <span>03</span>
                            <div className="services__area-item-icon">
                                <img src="assets/img/icon/services-33.png" alt="" />
                                <div className="services__area-item-icon-one">
                                    <img src="assets/img/icon/services-3.png" alt="" />
                                </div>
                            </div>
                            <div className="services__area-item-content">
                                <h4><a href="services-details.html">Branding</a></h4>
                                <p>Praesent vitae augue sem. Phasellus pretium eu ipsum sit amet interdum.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="services__area-item"> 
                            <span>04</span>
                            <div className="services__area-item-icon">
                                <img src="assets/img/icon/services-44.png" alt="" />
                                <div className="services__area-item-icon-one">
                                    <img src="assets/img/icon/services-4.png" alt="" />
                                </div>
                            </div>
                            <div className="services__area-item-content">
                                <h4><a href="services-details.html">Designing</a></h4>
                                <p>Praesent vitae augue sem. Phasellus pretium eu ipsum sit amet interdum.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="video__area" data-background="assets/img/video.jpg">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="video__area-play-icon video-pulse"> <a className="video-popup" href="https://www.youtube.com/watch?v=0WC-tD-njcA"><i className="fas fa-play"></i></a> </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="work__area section-padding">
            <div className="container">
                <div className="row mb-60">
                    <div className="col-xl-12">
                        <div className="work__area-title lg-t-center"> 
                            <span className="subtitle one">How IT Work</span>
                            <h2>Simple Work Process</h2> </div>
                    </div>
                </div>
                <div className="row mb-110">
                    <div className="col-xl-4 col-lg-4 col-md-6 pr-110 lg-mb-30">
                        <div className="work__area-item"> <span>01</span>
                            <div className="work__area-item-icon"> <img src="assets/img/icon/work-1.png" alt="" /> </div>
                            <div className="work__area-item-content">
                                <h4>Concept Creation</h4>
                                <p>pellentesque in dolor vel malesuada. Donec finibus libero odio</p>
                            </div>
                            <div className="work__area-item-shape"> <img src="assets/img/icon/shape-1.png" alt="" /> </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 pl-55 pr-55 md-mb-30">
                        <div className="work__area-item"> <span>02</span>
                            <div className="work__area-item-icon"> <img src="assets/img/icon/work-2.png" alt="" /> </div>
                            <div className="work__area-item-content">
                                <h4>Sketch Drawing</h4>
                                <p>pellentesque in dolor vel malesuada. Donec finibus libero odio</p>
                            </div>
                            <div className="work__area-item-shape"> <img src="assets/img/icon/shape-2.png" alt="" /> </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 pl-110">
                        <div className="work__area-item"> <span>03</span>
                            <div className="work__area-item-icon"> <img src="assets/img/icon/work-3.png" alt="" /> </div>
                            <div className="work__area-item-content">
                                <h4>Final Design</h4>
                                <p>pellentesque in dolor vel malesuada. Donec finibus libero odio</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="faq">
                            <div className="faq-item">
                                <div className="faq-item-card">
                                    <div className="faq-item-card-header">
                                        <h5>What are the acceptable formats for the portfolio?</h5> <i className="fal fa-angle-up"></i> </div>
                                    <div className="faq-item-card-header-content active">
                                        <p>pellentesque in dolor vel malesuada. Donec finibus libero odio, ac iaculis metus mattis quis. Curabitur a tincidunt risus, non gravida ipsum. Sed at ligula porta, dictum magna id, molestie mi. Mauris et ligula dui. Aliquam erat volutpat. Nam pharetra, risus vitae bibendum pellentesque, dui metus convallis felis, non semper leo leo nec augue. Maecenas vestibulum ornare iaculis. Integer elit arcu, lobortis id felis eu, scelerisque maximus libero.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="faq-item">
                                <div className="faq-item-card">
                                    <div className="faq-item-card-header">
                                        <h5>Protect Your Business with Insurance?</h5> <i className="fal fa-angle-down"></i> </div>
                                    <div className="faq-item-card-header-content display-none">
                                        <p>pellentesque in dolor vel malesuada. Donec finibus libero odio, ac iaculis metus mattis quis. Curabitur a tincidunt risus, non gravida ipsum. Sed at ligula porta, dictum magna id, molestie mi. Mauris et ligula dui. Aliquam erat volutpat. Nam pharetra, risus vitae bibendum pellentesque, dui metus convallis felis, non semper leo leo nec augue. Maecenas vestibulum ornare iaculis. Integer elit arcu, lobortis id felis eu, scelerisque maximus libero.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="faq-item m-0">
                                <div className="faq-item-card">
                                    <div className="faq-item-card-header">
                                        <h5>Open a Business Bank Account?</h5> <i className="fal fa-angle-down"></i> </div>
                                    <div className="faq-item-card-header-content display-none">
                                        <p>pellentesque in dolor vel malesuada. Donec finibus libero odio, ac iaculis metus mattis quis. Curabitur a tincidunt risus, non gravida ipsum. Sed at ligula porta, dictum magna id, molestie mi. Mauris et ligula dui. Aliquam erat volutpat. Nam pharetra, risus vitae bibendum pellentesque, dui metus convallis felis, non semper leo leo nec augue. Maecenas vestibulum ornare iaculis. Integer elit arcu, lobortis id felis eu, scelerisque maximus libero.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <FooterHome/>
    </>
  )
}

export default Home