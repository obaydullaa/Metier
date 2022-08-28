import React from 'react'
import { Link } from 'react-router-dom'

function HeaderThree() {
  return (
    <>
        <div className="header__area three">
            <div className="container custom-container">
                <div className="header__area-box">
                    <div className="header__area-box-logo">
                        <a href="index.html"> <img src="assets/img/logo-2.png"alt="" /> </a>
                    </div>
                    <div className="header__area-box-sidebar d-block">
                        <div className="header__area-box-sidebar-popup-icon"> <a href="#"><i className="fal fa-bars"></i></a> </div>
                    </div>

                    {/* <!-- sidebar Menu Start --> */}
                    <div className="header__area-box-sidebar-popup">
                        <div className="sidebar-close-btn"> <a href="#"><i className="fal fa-times"></i></a> </div>
                        <div className="header__area-box-sidebar-popup-logo">
                            <a href="index.html"> <img src="assets/img/logo-2.png"alt="" /> </a>
                        </div>
                        <div className="header__area-box-sidebar-popup-menu">
                            <ul>
                                <li className="toggle-menu"><a href="#">Home<i className="fal fa-angle-down change"></i></a>
                                    <ul className="sub-menu">
                                        <li><Link to='/home'>Home 01</Link> </li>
                                        <li><Link to='/home-two'>Home 02</Link> </li>
                                        <li><Link to='/home-three'>Home 03</Link> </li>
                                    </ul>
                                </li>
                                <li className="toggle-menu"><a href="#">Page<i className="fal fa-angle-down change"></i></a>
                                    <ul className="sub-menu">
                                        <li><a href="about.html">About</a> </li>
                                        <li><a href="services.html">Services</a> </li>
                                        <li><a href="services-details.html">Services Details</a> </li>
                                        <li><a href="error.html">Error</a> </li>
                                    </ul>
                                </li>
                                <li className="toggle-menu"><a href="#">Portfolio<i className="fal fa-angle-down change"></i></a>
                                    <ul className="sub-menu">
                                        <li><a href="portfolio-1.html">Portfolio 01</a> </li>
                                        <li><a href="portfolio-2.html">Portfolio 02</a> </li>
                                        <li><a href="portfolio-3.html">Portfolio 03</a> </li>
                                        <li><a href="portfolio-details.html">Portfolio Details 01</a> </li>
                                        <li><a href="portfolio-details-2.html">Portfolio Details 02</a> </li>
                                    </ul>
                                </li>
                                <li className="toggle-menu"><a href="#">News<i className="fal fa-angle-down change"></i></a>
                                    <ul className="sub-menu">
                                        <li><a href="blog-standard.html">News</a> </li>
                                        <li><a href="blog-details.html">News Details</a> </li>
                                    </ul>
                                </li>
                                <li><a href="contact.html">Contact</a> </li>
                            </ul>
                        </div>
                        <div className="contact__info">
                            <h4 className="mb-25">Contact Info</h4>
                            <div className="contact__info-list"> <a href="tel:89709806789"><i className="fal fa-phone-alt"></i>897 098 067 89</a> <a href="mailto:info@webmail.com"><i className="fal fa-envelope-open-text"></i>info@webmail.com</a> <a href="#"><i className="fal fa-map-marker-alt"></i>12/A, New Boston, NYC</a> </div>
                        </div>
                    </div>
                    <div className="sidebar-overlay"></div>
  
                </div>
            </div>
        </div>
    </>
  )
}

export default HeaderThree