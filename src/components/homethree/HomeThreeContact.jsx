import React from 'react'

function HomeThreeContact() {
  return (
    <div className="contact__area section-padding">
        <div className="container">
            <div className="row mb-60">
                <div className="col-xl-12">
                    <div className="contact__area-title lg-t-center"> <span className="subtitle">Contact Us</span>
                        <h2>Get in Touch</h2> </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-12">
                    <div className="contact__area-bottom">
                        <div className="contact__area-bottom-form">
                            <form >
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
  )
}

export default HomeThreeContact