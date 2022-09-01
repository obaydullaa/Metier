import React from 'react'

function Features() {
  return (
    <div className="features__area">
        <div className="container-fluid px-0">
            <div className="row gx-0">
                <div className="col-xl-12">
                    <div className="swiper features-slider">
                        <div className="swiper-wrapper">
                            <div className="features__area-item swiper-slide"> <img src="assets/img/features-1.jpg" alt="" />
                                <div className="features__area-item-content">
                                    <div className="features__area-item-content-icon"> <a href="services-details.html"><i className="fal fa-plus"></i></a> </div>
                                    <h3><a href="services-details.html">Product Design</a></h3>
                                    <p>Design strategy</p>
                                </div>
                            </div>
                            <div className="features__area-item features__area-item-hover swiper-slide"> <img src="assets/img/features-2.jpg" alt="" />
                                <div className="features__area-item-content">
                                    <div className="features__area-item-content-icon"> <a href="services-details.html"><i className="fal fa-plus"></i></a> </div>
                                    <h3><a href="services-details.html">Product Design</a></h3>
                                    <p>Design strategy</p>
                                </div>
                            </div>
                            <div className="features__area-item swiper-slide"> <img src="assets/img/features-3.jpg" alt="" />
                                <div className="features__area-item-content">
                                    <div className="features__area-item-content-icon"> <a href="services-details.html"><i className="fal fa-plus"></i></a> </div>
                                    <h3><a href="services-details.html">Product Design</a></h3>
                                    <p>Design strategy</p>
                                </div>
                            </div>
                            <div className="features__area-item swiper-slide"> <img src="assets/img/features-4.jpg" alt="" />
                                <div className="features__area-item-content">
                                    <div className="features__area-item-content-icon"> <a href="services-details.html"><i className="fal fa-plus"></i></a> </div>
                                    <h3><a href="services-details.html">Product Design</a></h3>
                                    <p>Design strategy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features