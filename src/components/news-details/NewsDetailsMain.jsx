import React from 'react'
import FooterMain from '../layouts/footer/FooterMain'
import HeaderMain from '../layouts/header/HeaderMain'

function NewsDetailsMain() {
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

      <div className="blog__details section-padding">
          <div className="container">
              <div className="row">
                  <div className="col-xl-8 col-lg-8 lg-mb-30">
                      <div className="blog__details-left">
                          <img src="assets/img/blog-7.jpg" alt="" />
                          <div className="blog__details-left-meta">
                              <ul>
                                  <li><a href="#"><i className="fal fa-user"></i>By - Admin</a></li>
                                  <li><a href="#"><i className="fal fa-calendar-alt"></i>07, March 2022</a></li>
                                  <li><a href="#"><i className="fal fa-comment-dots"></i>3 Comment</a></li>
                              </ul>
                          </div>
                          <h3 className="mb-20">20 Beautiful Portfolios For Designers & Artists</h3>
                          <p>Maecenas tincidunt hendrerit odio sed consectetur. Duis porta purus sapien, eget pretium augue consectetur ut. Nunc nibh augue, pretium quis imperdiet pellentesque, molestie eget nisi. Sed rutrum sit amet eros ac egestas. Maecenas tincidunt dolor in massa iaculis, vitae dignissim sem finibus. Pellentesque elementum vel arcu sit amet rhoncus. Nulla at eleifend lorem. Praesent et ex sed metus egestas feugiat. Donec velit libero, feugiat ac dictum vel, dignissim id ante. Praesent hendrerit posuere condimentum. </p>
                          <div className="blog__details-left-box">
                              <div className="blog__details-left-box-icon">
                                  <img src="assets/img/icon/quote.png" alt="" />
                              </div>
                              <p>Design Solution is a simple and unique solution for business owners to design their online presence, establish their brand, and attract more customers to their website. It's free!</p>
                              <h6>David Beckham</h6>                                
                          </div>
                          <p>Vestibulum eget tellus rhoncus, dictum massa a, mattis massa. Cras in leo semper, ultricies ligula nec, ornare tellus. Suspendisse quam risus, semper et ultricies a, commodo eu tortor. Phasellus elementum tincidunt varius. Nam facilisis, ante eget gravida vestibulum, ante nisi feugiat nulla, in dapibus neque turpis et dolor. Vestibulum in urna urna.</p>
                          <div className="row mt-40 mb-40">
                              <div className="col-sm-6 sm-mb-30">
                                  <div className="blog__details-left-list">
                                      <img className="img__full" src="assets/img/details-1.jpg" alt="" />                                    
                                  </div>
                              </div>
                              <div className="col-sm-6">
                                  <div className="blog__details-left-list blog__details-left-list-hover">
                                      <img className="img__full" src="assets/img/details-2.jpg" alt="" />
                                  </div>
                              </div>
                          </div>
                          <p className="mb-20">Experts.com helps you solve all your design-related problems. From logo design to website and app development, expert solutions are at your fingertips.</p>
                          <p>Design Solution is the place to find design solutions for your business or organization. We have hundreds of design solutions with everything from logos, themes, infographics and more for you to choose from.</p>
                          <div className="blog__details-left-related">
                              <div className="row align-items-center">
                                  <div className="col-md-7 md-mb-30">
                                      <div className="blog__details-left-related-tag">
                                          <h6>Tags :</h6>                                        
                                          <ul>
                                              <li><a href="blog-standard.html">Popular</a></li>
                                              <li><a href="blog-standard.html">Design</a></li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div className="col-md-5 t-right md-t-left">
                                      <div className="blog__details-left-related-share">
                                          <ul>
                                              <li><a href="#"><i className="fab fa-facebook-f"></i></a>
                                              </li>
                                              <li><a href="#"><i className="fab fa-twitter"></i></a>
                                              </li>
                                              <li><a href="#"><i className="fab fa-behance"></i></a>
                                              </li>
                                              <li><a href="#"><i className="fab fa-youtube"></i></a>
                                              </li>
                                              <li><a href="#"><i className="fab fa-linkedin-in"></i></a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="blog__details-left-post mb-55">
                              <div className="blog__details-left-post-author">
                                  <div className="blog__details-left-post-author-image">
                                      <img className="img__full" src="assets/img/avatar/author.png" alt="" />
                                  </div>
                                  <div className="blog__details-left-post-author-content">
                                      <h5>michelle monaghan</h5>
                                      <p>Pellentesque a placerat orci. Suspendisse rutrum lacus ipsum, eu vulputate augue blandit mollis. Integer vitae mi urna. Nam ultricies velit non tristique varius. Suspendisse sit amet molestie tellus</p>
                                  </div>
                              </div>
                          </div>
                          <div className="blog__details-left-comment mb-55">
                              <h3 className="mb-30">Comment (2)</h3>
                              <div className="blog__details-left-comment-item">
                                  <div className="blog__details-left-comment-item-comment">
                                      <div className="blog__details-left-comment-item-comment-image">
                                          <img src="assets/img/avatar/comment-1.jpg" alt="" />									
                                      </div>									
                                      <div className="blog__details-left-comment-item-comment-content">
                                          <h5>Justin Bieber<a href="#"><i className="fal fa-reply"></i>Reply</a></h5>
                                          <span>20 May, 2022  At 9:PM</span>
                                          <p>Pellentesque a placerat orci. Suspendisse rutrum lacus ipsum, eu vulputate augue blandit mollis. Integer vitae mi urna. Nam ultricies velit non tristique varius.</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="blog__details-left-comment-item ml-80">
                                  <div className="blog__details-left-comment-item-comment">
                                      <div className="blog__details-left-comment-item-comment-image">
                                          <img src="assets/img/avatar/comment-2.jpg" alt="" />									
                                      </div>									
                                      <div className="blog__details-left-comment-item-comment-content">
                                          <h5>Camila Cabello<a href="#"><i className="fal fa-reply"></i>Reply</a></h5>
                                          <span>22 May, 2022  At 7:PM</span>
                                          <p>Pellentesque a placerat orci. Suspendisse rutrum lacus ipsum, eu vulputate augue blandit mollis. Integer vitae mi urna. Nam ultricies velit non tristique varius.</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="blog__details-left-contact">
                              <h3 className="mb-30">Add Comment</h3>
                              <div className="blog__details-left-contact-form">
                                  <form action="#">	
                                      <div className="row">
                                          <div className="col-sm-6 mb-30"> 
                                              <div className="blog__details-left-contact-form-item">
                                                  <i className="fal fa-user"></i>
                                                  <input type="text" name="name" placeholder="Full Name" required="required" />
                                              </div>										
                                          </div>
                                          <div className="col-sm-6 sm-mb-30">
                                              <div className="blog__details-left-contact-form-item">
                                                  <i className="fal fa-envelope"></i>
                                                  <input type="text" name="email" placeholder="Email Address" required="required" />											
                                              </div>									
                                          </div>
                                          <div className="col-sm-12 mb-30"> 
                                              <div className="blog__details-left-contact-form-item">
                                                  <i className="fal fa-globe"></i>
                                                  <input type="text" name="subject" placeholder="https://" required="required" />
                                              </div>										
                                          </div>
                                          <div className="col-sm-12 mb-30"> 
                                              <div className="blog__details-left-contact-form-item">
                                                  <i className="fal fa-pen"></i>
                                                  <textarea name="message" placeholder="Type your comments...."></textarea>
                                              </div>										
                                          </div>
                                          <div className="col-lg-12">										
                                              <div className="blog__details-left-contact-form-item">
                                                  <button className="theme-btn-1" type="submit">Submit Now<i className="fal fa-long-arrow-right"></i></button>
                                              </div>										
                                          </div>
                                      </div>							
                                  </form>	
                              </div>						
                          </div>
                      </div>
                  </div>
                  <div className="col-xl-4 col-lg-4">
                      <div className="all__sidebar ml-25 xl-ml-0">
                          <div className="all__sidebar-item">
                              <h4>Search Here</h4>
                              <div className="all__sidebar-item-search">
                                  <form action="#">
                                      <input type="text" placeholder="Search....." />
                                      <button type="submit"><i className="fal fa-search"></i></button>
                                  </form>
                              </div>
                          </div>
                          <div className="all__sidebar-item">
                              <h4>Top Category</h4>
                              <div className="all__sidebar-item-category">
                                  <ul>                                    
                                      <li><a href="blog-standard.html"><i className="far fa-angle-double-right"></i>Design Research<span>(08)</span></a></li>
                                      <li><a href="blog-standard.html"><i className="far fa-angle-double-right"></i>Development<span>(06)</span></a></li>
                                      <li><a href="blog-standard.html"><i className="far fa-angle-double-right"></i>Digital Marketing<span>(05)</span></a></li>
                                      <li><a href="blog-standard.html"><i className="far fa-angle-double-right"></i>Branding<span>(09)</span></a></li>
                                      <li><a href="blog-standard.html"><i className="far fa-angle-double-right"></i>Market Research<span>(03)</span></a></li>
                                      <li><a href="blog-standard.html"><i className="far fa-angle-double-right"></i>SEO marketing<span>(02)</span></a></li>
                                  </ul>
                              </div>
                          </div>
                          <div className="all__sidebar-item">
                              <h4>Recent Post</h4>
                              <div className="all__sidebar-item-post">
                                  <div className="all__sidebar-item-post-item">
                                      <div className="all__sidebar-item-post-item-image">
                                          <a href="blog-details.html"><img src="assets/img/post-1.jpg" alt="" /></a>
                                      </div>
                                      <div className="all__sidebar-item-post-item-content">
                                          <span><i className="fal fa-calendar-alt"></i>05 June, 2022</span>
                                          <h5><a href="blog-details.html">Sample Brochure Design</a></h5>
                                      </div>
                                  </div>
                                  <div className="all__sidebar-item-post-item">
                                      <div className="all__sidebar-item-post-item-image">
                                          <a href="blog-details.html"><img src="assets/img/post-2.jpg" alt="" /></a>
                                      </div>
                                      <div className="all__sidebar-item-post-item-content">
                                          <span><i className="fal fa-calendar-alt"></i>02 June, 2022</span>
                                          <h5><a href="blog-details.html">Sample Brochure Design</a></h5>
                                      </div>
                                  </div>
                                  <div className="all__sidebar-item-post-item">
                                      <div className="all__sidebar-item-post-item-image">
                                          <a href="blog-details.html"><img src="assets/img/post-3.jpg" alt="" /></a>
                                      </div>
                                      <div className="all__sidebar-item-post-item-content">
                                          <span><i className="fal fa-calendar-alt"></i>04 June, 2022</span>
                                          <h5><a href="blog-details.html">Sample Brochure Design</a></h5>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="all__sidebar-item">
                              <h4>Tag</h4>
                              <div className="all__sidebar-item-tag">
                                  <ul>
                                      <li><a href="blog-standard.html">Design</a></li>
                                      <li><a href="blog-standard.html">Brochure</a></li>
                                      <li><a href="blog-standard.html">Product</a></li>
                                      <li><a href="blog-standard.html">Business</a></li>
                                      <li><a href="blog-standard.html">Developemnt</a></li>
                                      <li><a href="blog-standard.html">Design</a></li>
                                      <li><a href="blog-standard.html">Marketing</a></li>
                                      <li><a href="blog-standard.html">Branding</a></li>
                                  </ul>
                              </div>
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

export default NewsDetailsMain