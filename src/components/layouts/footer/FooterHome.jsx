import React from 'react'
import { Link } from 'react-router-dom'
import ScrollToTop from "react-scroll-to-top";

function FooterHome() {
  return (
    <>
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
                            <p>Copyright © 2022<Link to="/"> ThemeOri</Link> Website by Metier </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        {/* <div className="scroll-up scroll-one">
            <svg className="scroll-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" /> </svg>
        </div> */}
        <ScrollToTop smooth />
    </>
  )
}

export default FooterHome