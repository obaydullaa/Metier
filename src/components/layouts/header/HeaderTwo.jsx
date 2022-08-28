import React from 'react'
import { Link } from 'react-router-dom'

function HeaderTwo() {
  return (
    <>
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
                                          <li><Link to='/home'>Home 01</Link> </li>
                                          <li><Link to='/home-two'>Home 02</Link> </li>
                                          <li><Link to='/home-three'>Home 03</Link> </li>
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
    </>
  )
}

export default HeaderTwo