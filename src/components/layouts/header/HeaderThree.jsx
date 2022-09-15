import React from 'react'
import { Link } from 'react-router-dom'

function HeaderThree() {
  return (
    <>
        <div className="header-img-menu header__area three all-page">
            <div className="container custom-container">
                <div className="header__area-box">
                    <div className="header__area-box-logo">
                        <Link to='/'> <img src="assets/img/logo-2.png"alt="" /> </Link>
                    </div>
                    <div className="header__area-box-sidebar d-block">
                        <div className="header__area-box-sidebar-popup-icon"> <a href="#"><i className="fal fa-bars"></i></a> </div>
                    </div>

                    {/* <!-- sidebar Menu Start --> */}
                    <div className="header__area-box-sidebar-popup">
                        <div className="sidebar-close-btn"> <a href="#"><i className="fal fa-times"></i></a> </div>
                        <div className="header__area-box-sidebar-popup-logo">
                            <Link to="/"> <img src="assets/img/logo-2.png"alt="" /> </Link>
                        </div>
                        <div className="header__area-box-sidebar-popup-menu">
                            <ul id="mobilemenu">
                                <li className="menu-item-has-children"><Link to='/home' >Home</Link>
                                    <ul className="sub-menu">
                                        <li><Link to='/home'>Home 01</Link> </li>
                                        <li><Link to='/home-two'>Home 02</Link> </li>
                                        <li><Link to='/home-three'>Home 03</Link> </li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children"><Link to="/about">Page</Link>
                                    <ul className="sub-menu">
                                        <li><Link to="/about">About</Link> </li>
                                        <li><Link to="/services">Services</Link> </li>
                                        <li><Link to="/services-details">Services Details</Link> </li>
                                        <li><Link to="/error">Error</Link> </li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children"><Link to="/portfolio-one">Portfolio</Link>
                                    <ul className="sub-menu">
                                        <li><Link to="/portfolio-one">Portfolio One</Link> </li>
                                        <li><Link to="/portfolio-two">Portfolio Two</Link> </li>
                                        <li><Link to="/portfolio-three">Portfolio Three</Link> </li>
                                        <li><Link to="/portfolio-details-one">Portfolio Details 01</Link> </li>
                                        <li><Link to="/portfolio-details-two">Portfolio Details 02</Link> </li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children"><Link to="/news">News</Link>
                                    <ul className="sub-menu">
                                        <li><Link to="/news">News</Link> </li>
                                        <li><Link to="/news-details">News Details</Link> </li>
                                    </ul>
                                </li>
                                <li><Link to="/contact">Contact</Link> </li>
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