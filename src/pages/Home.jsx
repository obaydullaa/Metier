import React from 'react'

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

        <div className="header__area">
            <div className="container custom-container">
                <div className="header__area-box">
                    <div className="header__area-box-logo">
                        <a href="index.html"> <img src="assets/img/logo-1.png" alt="" /> </a>
                        <div className="responsive-menu"></div>
                    </div>
                    <div className="header__area-box-main-menu one meanmenu-responsive">
                        <ul id="mobilemenu">
                            <li className="menu-item-has-children"><a href="#">Home</a>
                                <ul className="sub-menu">
                                    <li><a href="index.html">Home 01</a> </li>
                                    <li><a href="index-2.html">Home 02</a> </li>
                                    <li><a href="index-3.html">Home 03</a> </li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children"><a href="#">Page</a>
                                <ul className="sub-menu">
                                    <li><a href="about.html">About</a> </li>
                                    <li><a href="services.html">Services</a> </li>
                                    <li><a href="services-details.html">Services Details</a> </li>
                                    <li><a href="error.html">Error</a> </li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children"><a href="#">Portfolio</a>
                                <ul className="sub-menu">
                                    <li><a href="portfolio-1.html">Portfolio 01</a> </li>
                                    <li><a href="portfolio-2.html">Portfolio 02</a> </li>
                                    <li><a href="portfolio-3.html">Portfolio 03</a> </li>
                                    <li><a href="portfolio-details.html">Portfolio Details 01</a> </li>
                                    <li><a href="portfolio-details-2.html">Portfolio Details 02</a> </li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children"><a href="#">News</a>
                                <ul className="sub-menu">
                                    <li><a href="blog-standard.html">News</a> </li>
                                    <li><a href="blog-details.html">News Details</a> </li>
                                </ul>
                            </li>
                            <li><a href="contact.html">Contact</a> </li>
                        </ul>
                    </div>
                    <div className="header__area-box-sidebar">
                        <div className="header__area-box-sidebar-popup-icon"> <a href="#"><i className="fal fa-bars"></i></a> </div>
                    </div>
                    
                    <div className="header__area-box-sidebar-popup">
                        <div className="sidebar-close-btn one"> <i className="fal fa-times"></i> </div>
                        <div className="header__area-box-sidebar-popup-logo">
                            <a href="index.html"> <img src="assets/img/logo-1.png" alt="" /> </a>
                        </div>
                        <p>Aliquam nibh tortor, faucibus quis ligula eget, faucibus auctor sapien. Fusce vulputate magna in magna pellentesque in mauris dignissim, imperdiet risus ac, congue nunc.</p>
                        <div className="header__area-box-sidebar-popup-contact">
                            <h4 className="mb-25">Contact Us</h4>
                            <form action="#">
                                <div className="row">
                                    <div className="col-sm-12 mb-30">
                                        <div className="header__area-box-sidebar-popup-contact-form-item"> <i className="far fa-user"></i>
                                            <input type="text" name="name" placeholder="Your Name" required="required" /> </div>
                                    </div>
                                    <div className="col-sm-12 mb-30">
                                        <div className="header__area-box-sidebar-popup-contact-form-item"> <i className="far fa-envelope-open"></i>
                                            <input type="text" name="email" placeholder="Email Address" required="required" /> </div>
                                    </div>
                                    <div className="col-sm-12 mb-30">
                                        <div className="header__area-box-sidebar-popup-contact-form-item"> <i className="fal fa-pen"></i>
                                            <textarea name="message" rows="5" placeholder="Message"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="header__area-box-sidebar-popup-contact-form-item">
                                            <button className="theme-btn" type="submit">Submit Now<i className="fal fa-long-arrow-right"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="header__area-box-sidebar-popup-follow-us">
                            <h4 className="mb-25">Follow Us</h4>
                            <div className="header__area-box-sidebar-popup-follow-us-social">
                                <ul>
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a> </li>
                                    <li><a href="#"><i className="fab fa-twitter"></i></a> </li>
                                    <li><a href="#"><i className="fab fa-instagram"></i></a> </li>
                                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-overlay"></div>
                </div>
            </div>
        </div>

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
        
        <div className="footer__area section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-7 col-lg-7">
                        <div className="footer__area-widget">
                            <div className="footer__area-widget-about lg-t-center">
                                <div className="footer__area-widget-about-logo">
                                    <a href="index.html"><img src="assets/img/logo-1.png" alt="" /></a>
                                </div>
                                <div className="footer__area-widget-about-social">
                                    <ul>
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a> </li>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a> </li>
                                        <li><a href="#"><i className="fab fa-behance"></i></a> </li>
                                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a> </li>
                                        <li><a href="#"><i className="fal fa-basketball-ball"></i></a> </li>
                                        <li><a href="#"><i className="fab fa-pinterest-p"></i></a> </li>
                                        <li><a href="#"><i className="fab fa-instagram"></i></a> </li>
                                    </ul>
                                </div>
                                <div className="footer__area-widget-about-menu">
                                    <ul>
                                        <li><a href="index.html">Home</a></li>
                                        <li><a href="services.html">Services</a></li>
                                        <li><a href="blog-standard.html">News</a></li>
                                        <li><a href="portfolio-1.html">Portfolio</a></li>
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5">
                        <div className="footer__area-widget">
                            <div className="footer__area-widget-subscribe one">
                                <h4>Subscribe</h4>
                                <form action="#">
                                    <input type="text" placeholder="Email Address" />
                                    <button type="submit"><i className="fal fa-hand-pointer"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="copyright__area copyright__area-one">
            <div className="container">
                <div className="row align-items-center copyright__area-border">
                    <div className="col-xl-12">
                        <div className="copyright__area-left copyright__area-one-left">
                            <p>Copyright © 2022<a href="index.html"> ThemeOri</a> Website by Metier </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="scroll-up scroll-one">
            <svg className="scroll-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" /> </svg>
        </div>
    </>
  )
}

export default Home