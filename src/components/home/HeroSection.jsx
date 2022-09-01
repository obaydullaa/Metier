import React from 'react'

function HeroSection() {
  return (
    <div className="banner__area" data-background="assets/img/banner.png">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="banner__area-content">
                        <h1>Create your <span>Portfolio</span></h1> <a className="theme-btn" href="portfolio-3.html">All Project <i className="fal fa-long-arrow-right"></i></a> </div>
                </div>
            </div>
        </div>
        <div className="banner__area-bottom">
            <div className="banner__area-bottom-icon">
                <ul>
                    <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fab fa-behance"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default HeroSection