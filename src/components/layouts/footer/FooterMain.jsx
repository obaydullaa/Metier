import React from 'react'
import { Link } from 'react-router-dom'

function FooterMain() {
  return (
    <>
        <div className="footer__area pt-60 pb-60">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-12">
                        <div className="footer__area-widget t-center">
                            <div className="footer__area-widget-about">
                                <div className="footer__area-widget-about-social three">
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
                                <div className="footer__area-widget-about-menu three">
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
            </div>
        </div>

        <div className="copyright__area">
            <div className="container">
                <div className="row align-items-center copyright__area-border">
                    <div className="col-xl-12">
                        <div className="copyright__area-left t-center">
                            <p>Copyright © 2022<a href="index.html"> ThemeOri</a> Website by Metier </p>
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

export default FooterMain