import React from 'react'

function ServiceDetailsSection() {
  return (
    <div className="services__details section-padding">
        <div className="container">
            <div className="row">
                <div className="col-xl-8 col-lg-8">
                    <div className="services__details-left">
                        <div className="services__details-left-content mb-40">
                            <h2 className="mb-30">Design Research</h2>
                            <p>Research for your next design project is done by a team of industry experts. We help with research, data analysis, and visualization. Our expertise covers many different fields including UX Design, Brand Strategy, Content Writing, User Experience Design and more.</p>
                        </div>
                        <div className="services__details-left-image mb-60">
                            <img src="assets/img/services_details-1.jpg" alt="" />
                            <div className="row mt-30">
                                <div className="col-sm-6 sm-mb-30">
                                    <img className="img__full" src="assets/img/services_details-2.jpg" alt="" />
                                </div>
                                <div className="col-sm-6">
                                    <img className="img__full" src="assets/img/services_details-3.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="services__details-left-feedback">
                            <div className="row">
                                <div className="col-xl-6 xl-mb-30">
                                    <div className="feedback__area-item">
                                        <div className="feedback__area-item-quote">
                                            <img src="assets/img/icon/quote.png" alt="" />
                                        </div>
                                        <div className="feedback__area-item-reviews">
                                            <h5>Good :</h5>
                                            <ul>
                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="feedback__area-item-content">
                                            <p>pellentesque in dolor vel malesuada. Donec finibus libero odio, ac iaculis metus mattis quis.</p>
                                        </div>
                                        <div className="feedback__area-item-bottom">
                                            <div className="feedback__area-item-bottom-avatar">
                                                <img src="assets/img/avatar/feedback-1.jpg" alt="" />
                                            </div>
                                            <div className="feedback__area-item-bottom-title">
                                                <h5>david bowie</h5>
                                                <span>UX Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 lg-mb-30">
                                    <div className="feedback__area-item">
                                        <div className="feedback__area-item-quote">
                                            <img src="assets/img/icon/quote.png" alt="" />
                                        </div>
                                        <div className="feedback__area-item-reviews">
                                            <h5>Good :</h5>
                                            <ul>
                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="feedback__area-item-content">
                                            <p>pellentesque in dolor vel malesuada. Donec finibus libero odio, ac iaculis metus mattis quis.</p>
                                        </div>
                                        <div className="feedback__area-item-bottom">
                                            <div className="feedback__area-item-bottom-avatar">
                                                <img src="assets/img/avatar/feedback-2.jpg" alt="" />
                                            </div>
                                            <div className="feedback__area-item-bottom-title">
                                                <h5>michel aoun</h5>
                                                <span>Marketing</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4">
                    <div className="all__sidebar ml-25 xl-ml-0">
                        <div className="all__sidebar-item services">
                            <h4>Our Services</h4>
                            <div className="all__sidebar-item-category">
                                <ul>                                    
                                    <li><a href="services-details.html"><i className="far fa-angle-double-right"></i>Design Research<span>(08)</span></a></li>
                                    <li><a href="services-details.html"><i className="far fa-angle-double-right"></i>Development<span>(06)</span></a></li>
                                    <li><a href="services-details.html"><i className="far fa-angle-double-right"></i>Digital Marketing<span>(05)</span></a></li>
                                    <li><a href="services-details.html"><i className="far fa-angle-double-right"></i>Branding<span>(09)</span></a></li>
                                    <li><a href="services-details.html"><i className="far fa-angle-double-right"></i>Market Research<span>(03)</span></a></li>
                                    <li><a href="services-details.html"><i className="far fa-angle-double-right"></i>SEO marketing<span>(02)</span></a></li>
                                </ul>
                            </div>
                        </div>
                    <div className="all__sidebar-item-help" data-background="assets/img/details-3.jpg">
                        <h4>Need Any Help?</h4>
                        <div className="all__sidebar-item-help-contact">
                        <div className="all__sidebar-item-help-contact-icon">
                            <i className="fal fa-phone-alt"></i>
                        </div>
                        <div className="all__sidebar-item-help-contact-content">
                            <span>Quick Help</span>
                            <h6><a href="tel:+123(458)896895">+123 ( 458 ) 896 895</a></h6>
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

export default ServiceDetailsSection