import React from 'react'
import { Link } from 'react-router-dom'

function FooterHomeTwo() {
  return (
    <>
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
                                            <li><Link to="/services-details">Development</Link></li>
                                            <li><Link to="/services-details">Designing</Link></li>
                                            <li><Link to="/services-details">Marketing</Link></li>
                                            <li><Link to="/services-details">Branding</Link></li>
                                            <li><Link to="/services-details">Market Research</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-5">
                                <div className="footer__area-widget">
                                    <h4 className="mb-40">Link</h4>
                                    <div className="footer__area-widget-menu">
                                        <ul>
                                            <li><Link to="/">Home</Link></li>
                                            <li><Link to="/services">Services</Link></li>
                                            <li><Link to="/news">News</Link></li>
                                            <li><Link to="/portfolio-one">Portfolio</Link></li>
                                            <li><Link to="/contact">Contact</Link></li>
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

export default FooterHomeTwo