import React from 'react'
import {Link} from 'react-router-dom'

function HeaderMain() {
  return (
    <>
        <div className="header__area">
            <div className="container custom-container">
                <div className="header__area-box">
                    <div className="header__area-box-logo">
                            <Link to='/'> <img src="assets/img/logo-2.png"alt="" /> </Link>
                        <div className="responsive-menu"></div>
                    </div>
                    <div className="header__area-box-main-menu one meanmenu-responsive">
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
    </>
  )
}

export default HeaderMain