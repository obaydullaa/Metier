import React from 'react'

function HomeThreeBanner() {
  return (
    <div className="banner__area-three" data-background="assets/img/banner-3.jpg">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="banner__area-three-content">
                        <h1>Design <span>Development</span></h1>
                        <a className="theme-btn-1" href="contact.html">Get A Quote <i className="fal fa-long-arrow-right"></i></a> 
                    </div>
                </div>
            </div>
        </div>
        <div className="banner__area-three-bottom">
            <div className="container custom-container">
                <div className="banner__area-three-bottom-icon">
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

export default HomeThreeBanner