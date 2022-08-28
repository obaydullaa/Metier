import React from 'react'

function HomeTwo() {
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

        <div className="header__area">
            <div className="container">
                <div className="header__area-box">
                    <div className="header__area-box-logo two">
                        <a href="index.html"> <img src="assets/img/logo-2.png" alt="" /> </a>
                        <div className="responsive-menu"></div>
                    </div>
                    <div className="header__area-box-menu">
                        <div className="header__area-box-main-menu meanmenu-responsive">
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
                        <div className="header__area-box-contact">
                            <div className="header__area-box-contact-icon">
                                <i className="fal fa-phone-alt"></i>
                            </div>
                            <div className="header__area-box-contact-content">
                                <span>Quick Help</span>
                                <h6><a href="tel:+123(458)896895">+123 ( 458 ) 896 895</a></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="banner__area-two" data-background="assets/img/banner.jpg">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="banner__area-two-content"> <span>Best Portfolio Builder</span>
                            <h1>Portfolio</h1> <a className="theme-btn-1" href="portfolio-2.html">All Project <i className="fal fa-long-arrow-right"></i></a> </div>
                    </div>
                </div>
            </div>
            <div className="banner__area-two-bottom">
                <div className="container">
                    <div className="banner__area-two-bottom-icon">
                        <ul>
                            <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fab fa-behance"></i></a></li>
                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="features__area-two">
            <div className="container-fluid px-0">
                <div className="row gx-0">
                    <div className="col-xl-4 col-lg-4">
                        <div className="features__area-two-item">
                            <h4>UI/UX Design</h4>
                            <p>Aliquam nibh tortor, faucibus quis ligula eget, faucibus auctor sapien.</p>
                            <a className="simple-btn" href="services-details.html">Discover More<i className="far fa-long-arrow-right"></i></a>
                            <div className="features__area-two-item-user"> <img src="assets/img/user.png" alt="" /> </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4">
                        <div className="features__area-two-item features__area-two-item-hover">
                            <h4>Development</h4>
                            <p>Aliquant nibh tortor, faucibus quis ligula eget, faucibus auctor sapien.</p>
                            <a className="simple-btn" href="services-details.html">Discover More<i className="far fa-long-arrow-right"></i></a>
                            <div className="features__area-two-item-user"> <img src="assets/img/user.png" alt="" /> </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4">
                        <div className="features__area-two-item">
                            <h4>Digital Marketing</h4>
                            <p>Aliquam nibh tortor, faucibus quis ligula eget, faucibus auctor sapien.</p>
                            <a className="simple-btn" href="services-details.html">Discover More<i className="far fa-long-arrow-right"></i></a>
                            <div className="features__area-two-item-user"> <img src="assets/img/user.png" alt="" /> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="portfolio__area section-padding">
            <div className="container">
                <div className="row mb-60">
                    <div className="col-xl-12">
                        <div className="portfolio__area-title lg-t-center"> <span className="subtitle">Portfolio</span>
                            <h2>Create Portfolio</h2> </div>
                    </div>
                </div>
                <div className="row mb-30">
                    <div className="col-xl-4 col-lg-4 lg-mb-30">
                        <div className="portfolio__area-item">
                            <div className="portfolio__area-item-image"> <img className="img__full" src="assets/img/portfolio/portfolio-1.jpg" alt="" />
                                <div className="portfolio__area-item-image-content">
                                    <div className="portfolio__area-item-image-content-text"> <span>Photography</span>
                                        <h4><a href="portfolio-details.html">Photography</a></h4> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-8">
                        <div className="portfolio__area-item portfolio__area-item-hover">
                            <div className="portfolio__area-item-image"> <img className="img__full" src="assets/img/portfolio/portfolio-2.jpg" alt="" />
                                <div className="portfolio__area-item-image-content">
                                    <div className="portfolio__area-item-image-content-text"> <span>Photography</span>
                                        <h4><a href="portfolio-details.html">Photography</a></h4> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-30">
                    <div className="col-xl-8 col-lg-8 lg-mb-30">
                        <div className="portfolio__area-item">
                            <div className="portfolio__area-item-image"> <img className="img__full" src="assets/img/portfolio/portfolio-3.jpg" alt="" />
                                <div className="portfolio__area-item-image-content">
                                    <div className="portfolio__area-item-image-content-text"> <span>Photography</span>
                                        <h4><a href="portfolio-details.html">Photography</a></h4> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4">
                        <div className="portfolio__area-item">
                            <div className="portfolio__area-item-image"> <img className="img__full" src="assets/img/portfolio/portfolio-4.jpg" alt="" />
                                <div className="portfolio__area-item-image-content">
                                    <div className="portfolio__area-item-image-content-text"> <span>Photography</span>
                                        <h4><a href="portfolio-details.html">Photography</a></h4> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 lg-mb-30">
                        <div className="portfolio__area-item">
                            <div className="portfolio__area-item-image"> <img className="img__full" src="assets/img/portfolio/portfolio-5.jpg" alt="" />
                                <div className="portfolio__area-item-image-content">
                                    <div className="portfolio__area-item-image-content-text"> <span>Photography</span>
                                        <h4><a href="portfolio-details.html">Photography</a></h4> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="portfolio__area-item">
                            <div className="portfolio__area-item-image"> <img className="img__full" src="assets/img/portfolio/portfolio-6.jpg" alt="" />
                                <div className="portfolio__area-item-image-content">
                                    <div className="portfolio__area-item-image-content-text"> <span>Photography</span>
                                        <h4><a href="#">Photography</a></h4> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
 
        <div className="skill__area" data-background="assets/img/skill.jpg">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-4 lg-mb-50">
                        <div className="skill__area-left">
                            <div className="skill__area-left-play-icon video-pulse"> <a className="video-popup" href="https://www.youtube.com/watch?v=0WC-tD-njcA"><i className="fas fa-play"></i></a> </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-8">
                        <div className="skill__area-right">
                            <div className="skill__area-right-title mb-30">
                                <h2>My Skill</h2> </div>
                            <div className="skill__area-right-skill">
                                <div className="skill__area-right-skill-item">
                                    <div className="skill__area-right-skill-item-content">
                                        <h6>Development</h6> <span className="skill__area-right-skill-item-count">
                                        <span className="counter">80</span>%</span>
                                    </div>
                                    <div className="skill__area-right-skill-item-inner">
                                        <div className="skill__area-right-skill-item-bar" data-width="80"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="skill__area-right-skill mt-30">
                                <div className="skill__area-right-skill-item">
                                    <div className="skill__area-right-skill-item-content">
                                        <h6>Designing</h6> <span className="skill__area-right-skill-item-count">
                                        <span className="counter">70</span>%</span>
                                    </div>
                                    <div className="skill__area-right-skill-item-inner">
                                        <div className="skill__area-right-skill-item-bar" data-width="70"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="skill__area-right-skill mt-30">
                                <div className="skill__area-right-skill-item">
                                    <div className="skill__area-right-skill-item-content">
                                        <h6>Marketing</h6> <span className="skill__area-right-skill-item-count">
                                        <span className="counter">75</span>%</span>
                                    </div>
                                    <div className="skill__area-right-skill-item-inner">
                                        <div className="skill__area-right-skill-item-bar" data-width="75"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="sponsors__area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="swiper sponsors-slider">
                            <div className="swiper-wrapper">
                                <div className="sponsors__area-brand swiper-slide">
                                    <a href="#"><img src="assets/img/brand-1.png" alt="" /></a>
                                </div>
                                <div className="sponsors__area-brand swiper-slide">
                                    <a href="#"><img src="assets/img/brand-2.png" alt="" /></a>
                                </div>
                                <div className="sponsors__area-brand swiper-slide">
                                    <a href="#"><img src="assets/img/brand-3.png" alt="" /></a>
                                </div>
                                <div className="sponsors__area-brand swiper-slide">
                                    <a href="#"><img src="assets/img/brand-4.png" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="blog__area section-padding">
            <div className="container">
                <div className="row mb-60">
                    <div className="col-xl-12">
                        <div className="blog__area-title"> <span className="subtitle-one">News & Blog</span>
                            <h2>News & Insights</h2> </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6 lg-mb-30">
                        <div className="blog__area-item">
                            <div className="blog__area-item-image"> 
                                <a href="blog-details.html"><img src="assets/img/blog-1.jpg" alt="" /></a>
                            </div>
                            <div className="blog__area-item-content">
                                <div className="blog__area-item-content-meta">
                                    <ul>
                                        <li><a href="#"><i className="fal fa-calendar-alt"></i>05 June, 2022</a></li>
                                        <li><a href="#"><i className="fal fa-comments"></i>3 Comment</a></li>
                                    </ul>
                                </div>
                                <h4><a href="blog-details.html">20 Beautiful Portfolios For Designers & Artists</a></h4> <a className="simple-btn" href="blog-details.html">Read More</a> </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 md-mb-30">
                        <div className="blog__area-item">
                            <div className="blog__area-item-image">
                                <a href="blog-details.html"><img src="assets/img/blog-2.jpg" alt="" /></a>
                            </div>
                            <div className="blog__area-item-content">
                                <div className="blog__area-item-content-meta">
                                    <ul>
                                        <li><a href="#"><i className="fal fa-calendar-alt"></i>05 June, 2022</a></li>
                                        <li><a href="#"><i className="fal fa-comments"></i>3 Comment</a></li>
                                    </ul>
                                </div>
                                <h4><a href="blog-details.html">The Best Way to Build Your Portfolio</a></h4> <a className="simple-btn" href="blog-details.html">Read More</a> </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="blog__area-item">
                            <div className="blog__area-item-image">
                                <a href="blog-details.html"><img src="assets/img/blog-3.jpg" alt="" /></a>
                            </div>
                            <div className="blog__area-item-content">
                                <div className="blog__area-item-content-meta">
                                    <ul>
                                        <li><a href="#"><i className="fal fa-calendar-alt"></i>05 June, 2022</a></li>
                                        <li><a href="#"><i className="fal fa-comments"></i>3 Comment</a></li>
                                    </ul>
                                </div>
                                <h4><a href="blog-details.html">Get Your Portfolio Ready in 15 Minutes</a></h4> <a className="simple-btn" href="blog-details.html">Read More</a> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="footer__area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6 md-mb-30">
                        <div className="footer__area-widget">
                            <div className="footer__area-widget-about m-0">
                                <div className="footer__area-widget-about-logo">
                                    <a href="index.html"><img src="assets/img/logo-2.png" alt="" /></a>
                                </div>
                                <p>Aliquam nibh tortor, faucibus quis ligula eget, faucibus auctor sapien. Fusce vulputate magna in magna pellentesque</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 lg-mb-30">
                        <div className="row">
                            <div className="col-7">
                                <div className="footer__area-widget">
                                    <h4 className="mb-40">Services</h4>
                                    <div className="footer__area-widget-menu">
                                        <ul>
                                            <li><a href="services-details.html">Development</a></li>
                                            <li><a href="services-details.html">Designing</a></li>
                                            <li><a href="services-details.html">Marketing</a></li>
                                            <li><a href="services-details.html">Branding</a></li>
                                            <li><a href="services-details.html">Market Research</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-5">
                                <div className="footer__area-widget">
                                    <h4 className="mb-40">Link</h4>
                                    <div className="footer__area-widget-menu">
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
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="footer__area-widget">
                            <div className="footer__area-widget-subscribe">
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

        <div className="copyright__area">
            <div className="container">
                <div className="row align-items-center copyright__area-border">
                    <div className="col-xl-6 col-lg-6 col-md-8 md-mb-20">
                        <div className="copyright__area-left md-t-center">
                            <p>Copyright © 2022<a href="index.html"> ThemeOri</a> Website by Metier </p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-4">
                        <div className="copyright__area-right t-right md-t-center">
                            <ul>
                                <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fab fa-behance"></i></a></li>
                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="scroll-up">
            <svg className="scroll-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" /> </svg>
        </div>
    </>
  )
}

export default HomeTwo