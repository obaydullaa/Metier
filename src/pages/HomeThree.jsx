import React from 'react'
import HeaderThree from '../components/layouts/header/HeaderThree'
import FooterMain from '../components/layouts/footer/FooterMain'

function HomeThree() {
  return (
    <>
        <div className="custom__cursor-one "></div>
        <div className="custom__cursor-two "></div>


        {/* <div classNameName="theme-loader">
            <div classNameName="spinner">
                <div classNameName="double-bounce1"></div>
                <div classNameName="double-bounce2"></div>
            </div>
        </div> */}

        <HeaderThree/>

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

        <div className="skill__area-two">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-7 col-lg-7 lg-mb-30">
                        <div className="skill__area-two-left"> <span>My Skills</span> <img src="assets/img/skills.png"alt="" /> </div>
                    </div>
                    <div className="col-xl-5 col-lg-5">
                        <div className="skill__area-two-right">
                            <div className="skill__area-two-right-skill">
                                <div className="skill__area-two-right-skill-item">
                                    <div className="skill__area-two-right-skill-item-content">
                                        <h6>Development</h6> <span className="skill__area-two-right-skill-item-count">
                                        <span className="counter">80</span>%</span>
                                    </div>
                                    <div className="skill__area-two-right-skill-item-inner">
                                        <div className="skill__area-two-right-skill-item-bar" data-width="80"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="skill__area-two-right-skill mt-30">
                                <div className="skill__area-two-right-skill-item">
                                    <div className="skill__area-two-right-skill-item-content">
                                        <h6>Designing</h6> <span className="skill__area-two-right-skill-item-count">
                                        <span className="counter">90</span>%</span>
                                    </div>
                                    <div className="skill__area-two-right-skill-item-inner">
                                        <div className="skill__area-two-right-skill-item-bar" data-width="90"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="skill__area-two-right-skill mt-30">
                                <div className="skill__area-two-right-skill-item">
                                    <div className="skill__area-two-right-skill-item-content">
                                        <h6>Marketing</h6> <span className="skill__area-two-right-skill-item-count">
                                        <span className="counter">70</span>%</span>
                                    </div>
                                    <div className="skill__area-two-right-skill-item-inner">
                                        <div className="skill__area-two-right-skill-item-bar" data-width="70"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="portfolio__area-two section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 mb-60">
                        <div className="portfolio__area-two-title"> <span className="subtitle-one">Portfolio</span>
                            <h2>Create Portfolio</h2> </div>
                        <div className="portfolio__area-two-btn">
                            <ul>
                                <li className="active" data-filter="*">Show All</li>
                                <li data-filter=".design">Design</li>
                                <li data-filter=".development">Development</li>
                                <li data-filter=".marketing">Marketing</li>
                                <li data-filter=".strategy">Strategy</li>
                                <li data-filter=".branding">Branding</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row portfolio__area-two-active">
                    <div className="col-xl-4 col-lg-4 col-md-6 portfolio-item mb-30">
                        <div className="portfolio__area-two-item"> <img className="img__full" src="assets/img/portfolio/portfolio-7.jpg"alt="" />
                            <div className="portfolio__area-two-item-content"> <span>Photography</span>
                                <h4><a href="portfolio-details-2.html">Photography</a></h4> </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 portfolio-item marketing mb-30">
                        <div className="portfolio__area-two-item"> <img className="img__full" src="assets/img/portfolio/portfolio-8.jpg"alt="" />
                            <div className="portfolio__area-two-item-content"> <span>Photography</span>
                                <h4><a href="portfolio-details-2.html">Photography</a></h4> </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 portfolio-item branding design mb-30">
                        <div className="portfolio__area-two-item"> <img className="img__full" src="assets/img/portfolio/portfolio-9.jpg"alt="" />
                            <div className="portfolio__area-two-item-content"> <span>Photography</span>
                                <h4><a href="portfolio-details-2.html">Photography</a></h4> </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 portfolio-item development marketing mb-30">
                        <div className="portfolio__area-two-item"> <img className="img__full" src="assets/img/portfolio/portfolio-10.jpg"alt="" />
                            <div className="portfolio__area-two-item-content"> <span>Photography</span>
                                <h4><a href="portfolio-details-2.html">Photography</a></h4> </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 portfolio-item design mb-30">
                        <div className="portfolio__area-two-item"> <img className="img__full" src="assets/img/portfolio/portfolio-11.jpg"alt="" />
                            <div className="portfolio__area-two-item-content"> <span>Photography</span>
                                <h4><a href="portfolio-details-2.html">Photography</a></h4> </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 portfolio-item development branding strategy mb-30">
                        <div className="portfolio__area-two-item"> <img className="img__full" src="assets/img/portfolio/portfolio-12.jpg"alt="" />
                            <div className="portfolio__area-two-item-content"> <span>Photography</span>
                                <h4><a href="portfolio-details-2.html">Photography</a></h4> </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 portfolio-item strategy branding lg-mb-30">
                        <div className="portfolio__area-two-item"> <img className="img__full" src="assets/img/portfolio/portfolio-13.jpg"alt="" />
                            <div className="portfolio__area-two-item-content"> <span>Photography</span>
                                <h4><a href="portfolio-details-2.html">Photography</a></h4> </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 portfolio-item design lg-mb-30">
                        <div className="portfolio__area-two-item"> <img className="img__full" src="assets/img/portfolio/portfolio-14.jpg"alt="" />
                            <div className="portfolio__area-two-item-content"> <span>Photography</span>
                                <h4><a href="portfolio-details-2.html">Photography</a></h4> </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 portfolio-item strategy development">
                        <div className="portfolio__area-two-item"> <img className="img__full" src="assets/img/portfolio/portfolio-15.jpg"alt="" />
                            <div className="portfolio__area-two-item-content"> <span>Photography</span>
                                <h4><a href="portfolio-details-2.html">Photography</a></h4> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="sponsors__area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6"></div>
                    <div className="col-xl-6">
                        <div className="swiper sponsors-slider">
                            <div className="swiper-wrapper">
                                <div className="sponsors__area-brand swiper-slide">
                                    <a href="#"><img src="assets/img/brand-1.png"alt="" /></a>
                                </div>
                                <div className="sponsors__area-brand swiper-slide">
                                    <a href="#"><img src="assets/img/brand-2.png"alt="" /></a>
                                </div>
                                <div className="sponsors__area-brand swiper-slide">
                                    <a href="#"><img src="assets/img/brand-3.png"alt="" /></a>
                                </div>
                                <div className="sponsors__area-brand swiper-slide">
                                    <a href="#"><img src="assets/img/brand-4.png"alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="reviews__area" data-background="assets/img/reviews.jpg">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-8">
                        <div className="reviews__area-left">
                            <div className="reviews__area-left-title">
                                <h2>Client Reviews</h2> </div>
                            <div className="swiper reviews">
                                <div className="swiper-wrapper">
                                    <div className="reviews__area-left-item swiper-slide">
                                        <p>Pellentesque luctus elit justo, sit amet rutrum purus pulvinar nec. Praesent rutrum porttitor nunc nec tristique. Vivamus molestie sapien in ornare ornare. Duis blandit metus a ipsum commodo</p>
                                        <div className="reviews__area-left-item-client">
                                            <div className="reviews__area-left-item-client-avatar"> <img src="assets/img/avatar/client.jpg"alt="" /> </div>
                                            <div className="reviews__area-left-item-client-content">
                                                <h5>David Beckham</h5> <span>UI Designer</span> </div>
                                        </div>
                                    </div>
                                    <div className="reviews__area-left-item swiper-slide">
                                        <p>Pellentesque luctus elit justo, sit amet rutrum purus pulvinar nec. Praesent rutrum porttitor nunc nec tristique. Vivamus molestie sapien in ornare ornare. Duis blandit metus a ipsum commodo</p>
                                        <div className="reviews__area-left-item-client">
                                            <div className="reviews__area-left-item-client-avatar"> <img src="assets/img/avatar/client-1.jpg"alt="" /> </div>
                                            <div className="reviews__area-left-item-client-content">
                                                <h5>Philip Kotler</h5> <span>UI Designer</span> </div>
                                        </div>
                                    </div>
                                    <div className="reviews__area-left-item swiper-slide">
                                        <p>Pellentesque luctus elit justo, sit amet rutrum purus pulvinar nec. Praesent rutrum porttitor nunc nec tristique. Vivamus molestie sapien in ornare ornare. Duis blandit metus a ipsum commodo</p>
                                        <div className="reviews__area-left-item-client">
                                            <div className="reviews__area-left-item-client-avatar"> <img src="assets/img/avatar/client-2.jpg"alt="" /> </div>
                                            <div className="reviews__area-left-item-client-content">
                                                <h5>Janet Jackson</h5> <span>UI Designer</span> </div>
                                        </div>
                                    </div>
                                    <div className="reviews__area-left-item swiper-slide">
                                        <p>Pellentesque luctus elit justo, sit amet rutrum purus pulvinar nec. Praesent rutrum porttitor nunc nec tristique. Vivamus molestie sapien in ornare ornare. Duis blandit metus a ipsum commodo</p>
                                        <div className="reviews__area-left-item-client">
                                            <div className="reviews__area-left-item-client-avatar"> <img src="assets/img/avatar/client-3.jpg"alt="" /> </div>
                                            <div className="reviews__area-left-item-client-content">
                                                <h5>Paris Jackson</h5> <span>UI Designer</span> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="reviews__area-left-dots">
                                <div className="reviews-pagination"></div>
                            </div>
                            <div className="reviews__area-left-quote"><img src="assets/img/icon/quote.png"alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

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

        <FooterMain/>

    </>
  )
}

export default HomeThree