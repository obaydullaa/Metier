import React from 'react'
import FooterMain from '../components/layouts/footer/FooterMain'
import HeaderMain from '../components/layouts/header/HeaderMain'

function About() {
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

        <HeaderMain className="all-page"/>

        <div className="about__page section-padding pb-100">
            <div className="container">
                <div className="row mb-60">
                    <div className="col-xl-6 col-lg-8">
                        <div className="about__page-title">
                            <span className="subtitle">About Us</span>
                            <h2>Best Portfolio Management Software</h2>
                        </div>
                    </div>
                </div>
                <div className="row mb-100">
                    <div className="col-xl-12">
                        <div className="about__page-area">
                            <div className="about__page-area-experience">
                                <h3><span className="counter">16</span>+</h3>
                                <p>Years Experience In Our Company</p>
                            </div>
                            <img src="assets/img/about.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 lg-mb-30">
                        <div className="about__page-area-item">
                            <h2><span className="counter">520</span>K</h2>
                            <p>project complete at last 5 years</p>
                        </div>					
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 sm-mb-30">
                        <div className="about__page-area-item">
                            <h2><span className="counter">95</span>%</h2>
                            <p>Clients Happy with metier</p>
                        </div>					
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 sm-mb-30">
                        <div className="about__page-area-item">
                            <h2><span className="counter">987</span>+</h2>
                            <p>Clients Active With Metier</p>
                        </div>					
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="about__page-area-item">
                            <h2><span className="counter">50</span>%</h2>
                            <p>project complete at last 5 years</p>
                        </div>					
                    </div>
                </div>
            </div>
        </div>

        <div className="team__area">
            <div className="container">
                <div className="row mb-60 team__area-border">
                    <div className="col-xl-12">
                        <div className="team__area-title lg-t-center">
                            <span className="subtitle">Team</span>
                            <h2>Experience</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-6 xl-mb-30">
                        <div className="team__area-item">
                            <div className="team__area-item-image">
                                <img src="assets/img/team/team-1.jpg" alt="" />
                                <div className="team__area-item-image-social">
                                    <ul>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a> </li>
                                        <li><a href="#"><i className="fab fa-behance"></i></a> </li>
                                        <li><a href="#"><i className="fal fa-basketball-ball"></i></a> </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team__area-item-content">
                                <h5>david beckham</h5>
                                <span>UI Designer</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 md-mb-30">
                        <div className="team__area-item">
                            <div className="team__area-item-image">
                                <img src="assets/img/team/team-2.jpg" alt="" />
                                <div className="team__area-item-image-social">
                                    <ul>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a> </li>
                                        <li><a href="#"><i className="fab fa-behance"></i></a> </li>
                                        <li><a href="#"><i className="fal fa-basketball-ball"></i></a> </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team__area-item-content">
                                <h5>michel aoun</h5>
                                <span>CEO & Founder</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 md-mb-30">
                        <div className="team__area-item">
                            <div className="team__area-item-image">
                                <img src="assets/img/team/team-3.jpg" alt="" />
                                <div className="team__area-item-image-social">
                                    <ul>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a> </li>
                                        <li><a href="#"><i className="fab fa-behance"></i></a> </li>
                                        <li><a href="#"><i className="fal fa-basketball-ball"></i></a> </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team__area-item-content">
                                <h5>steve rhodes</h5>
                                <span>Project Manager</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="team__area-item">
                            <div className="team__area-item-image">
                                <img src="assets/img/team/team-4.jpg" alt="" />
                                <div className="team__area-item-image-social">
                                    <ul>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a> </li>
                                        <li><a href="#"><i className="fab fa-behance"></i></a> </li>
                                        <li><a href="#"><i className="fal fa-basketball-ball"></i></a> </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team__area-item-content">
                                <h5>cansu tuman</h5>
                                <span>Senior Designer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="client__area">
            <div className="container">
                <div className="row mb-60">
                    <div className="col-xl-12">
                        <div className="client__area-title"> 
                            <span className="subtitle-one">Global Clients</span>
                            <h2>We have more than 599+ global clients</h2> 
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-30">
                        <div className="client__area-item">
                            <img src="assets/img/brand/brand-1.png" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 sm-mb-30">
                        <div className="client__area-item">
                            <img src="assets/img/brand/brand-2.png" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 lg-mb-30">
                        <div className="client__area-item">
                            <img src="assets/img/brand/brand-3.png" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 sm-mb-30">
                        <div className="client__area-item">
                            <img src="assets/img/brand/brand-4.png" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 lg-mb-30">
                        <div className="client__area-item">
                            <img src="assets/img/brand/brand-5.png" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 sm-mb-30">
                        <div className="client__area-item">
                            <img src="assets/img/brand/brand-6.png" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 sm-mb-30">
                        <div className="client__area-item">
                            <img src="assets/img/brand/brand-7.png" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="client__area-item">
                            <img src="assets/img/brand/brand-8.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <FooterMain/>

    </>
  )
}

export default About