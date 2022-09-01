import React from 'react'

function AboutUs() {
  return (
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
  )
}

export default AboutUs