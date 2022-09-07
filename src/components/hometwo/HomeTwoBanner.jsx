import React from 'react'

function HomeTwoBanner() {
  return (
    <div className="banner__area-two" 
    style={{
        backgroundImage: `url("assets/img/banner.jpg")`,
    }}
    >
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="banner__area-two-content"> <span>Best Portfolio Builder</span>
                        <h1>Portfolio</h1> <a className="theme-btn-1" href="portfolio-2.html">All Project <i className="fal fa-long-arrow-right"></i></a> </div>
                </div>
            </div>
        </div>
        <div className="banner__area-two-bottom">
            <div className="container">
                <div className="banner__area-two-bottom-icon">
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
  )
}

export default HomeTwoBanner