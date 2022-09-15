import React from 'react'
import { Link } from 'react-router-dom'

function HeaderTwo() {
  return (
    <>
        <div className="header-img-menu header__area all-page">
            <div className="container">
                <div className="header__area-box">
                    <div className="header__area-box-logo two">
                            <Link to='/'> <img src="assets/img/logo-2.png"alt="" /> </Link>
                        <div className="responsive-menu"></div>
                    </div>
                    <div className="header__area-box-menu">
                        <div className="header__area-box-main-menu meanmenu-responsive">
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