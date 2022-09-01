import React from 'react'

function HomeTwoFeatures() {
  return (
    <div className="features__area-two">
        <div className="container-fluid px-0">
            <div className="row gx-0">
                <div className="col-xl-4 col-lg-4">
                    <div className="features__area-two-item">
                        <h4>UI/UX Design</h4>
                        <p>Aliquam nibh tortor, faucibus quis ligula eget, faucibus auctor sapien.</p>
                        <a className="simple-btn" href="services-details.html">Discover More<i className="far fa-long-arrow-right"></i></a>
                        <div className="features__area-two-item-user"> <img src="assets/img/user.png" alt="" /> </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4">
                    <div className="features__area-two-item features__area-two-item-hover">
                        <h4>Development</h4>
                        <p>Aliquant nibh tortor, faucibus quis ligula eget, faucibus auctor sapien.</p>
                        <a className="simple-btn" href="services-details.html">Discover More<i className="far fa-long-arrow-right"></i></a>
                        <div className="features__area-two-item-user"> <img src="assets/img/user.png" alt="" /> </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4">
                    <div className="features__area-two-item">
                        <h4>Digital Marketing</h4>
                        <p>Aliquam nibh tortor, faucibus quis ligula eget, faucibus auctor sapien.</p>
                        <a className="simple-btn" href="services-details.html">Discover More<i className="far fa-long-arrow-right"></i></a>
                        <div className="features__area-two-item-user"> <img src="assets/img/user.png" alt="" /> </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeTwoFeatures