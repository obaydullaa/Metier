import React from 'react'
import FooterMain from '../components/layouts/footer/FooterMain'
import HeaderMain from '../components/layouts/header/HeaderMain'

function Contact() {
    return (
        <>
          <div className="custom__cursor-one"></div>
          <div className="custom__cursor-two"></div>
          {/* <!-- Preloader start -->
          <div className="theme-loader">
            <div className="spinner">
              <div className="double-bounce1"></div>
              <div className="double-bounce2"></div>
            </div>
          </div> */}
          <HeaderMain/>
    
            <div className="contact__area section-padding">
                <div className="container">
                    <div className="row mb-60">
                        <div className="col-xl-5 col-lg-6">
                            <div className="contact__area-title">
                                <span className="subtitle">Contact Us</span>
                                <h2>Need Yor any help Contact with Us</h2> 
                            </div>
                            <div className="contact__area-info">
                                <div className="contact__area-info-item">
                                    <div className="contact__area-info-item-icon">
                                        <i className="far fa-phone-alt"></i>
                                        <span>Phone :</span>
                                    </div>
                                    <div className="contact__area-info-item-content">
                                        <a href="tel:+123(458)896895">+123 ( 458 ) 896 895</a>
                                    </div>
                                </div>
                                <div className="contact__area-info-item">
                                    <div className="contact__area-info-item-icon">
                                        <i className="fal fa-envelope"></i>
                                        <span>Email :</span>
                                    </div>
                                    <div className="contact__area-info-item-content">
                                        <a href="mailto:support@gamil.com">support@gamil.com</a>
                                    </div>
                                </div>
                                <div className="contact__area-info-item">
                                    <div className="contact__area-info-item-icon">
                                        <i className="far fa-map-marker-alt"></i>
                                        <span>Location :</span>
                                    </div>
                                    <div className="contact__area-info-item-content">
                                        <a href="#">66W3+Q4G Buxton, UK</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="contact__area-bottom">
                                <div className="contact__area-bottom-form page">
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-sm-12 mb-25">
                                                <div className="contact__area-bottom-form-item">
                                                    <input type="text" name="name" placeholder="Your Name" required="required" /> </div>
                                            </div>
                                            <div className="col-sm-12 mb-25">
                                                <div className="contact__area-bottom-form-item">
                                                    <input type="text" name="email" placeholder="Email Address" required="required" /> </div>
                                            </div>
                                            <div className="col-sm-12 mb-25">
                                                <div className="contact__area-bottom-form-item">
                                                    <input type="text" name="subject" placeholder="Subject" required="required" /> </div>
                                            </div>
                                            <div className="col-sm-12 mb-30">
                                                <div className="contact__area-bottom-form-item">
                                                    <textarea name="message" rows="5" placeholder="Message"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 mb-45">
                                                <div className="contact__area-bottom-form-item">
                                                    <label>
                                                        <input className="mr-10" type="checkbox" />I agree with services tarms and condition</label>
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="contact__area-bottom-form-item">
                                                    <button className="theme-btn-1" type="submit">Submit Now<i className="far fa-long-arrow-right"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="contact__area-bottom-map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830894606!2d-74.11976383964463!3d40.69766374865767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1652012644726!5m2!1sen!2sbd" loading="lazy"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
          <FooterMain/>
    
        </>
      )
    }

export default Contact