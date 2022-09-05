import React from 'react'
import FooterMain from '../layouts/footer/FooterMain'
import HeaderMain from '../layouts/header/HeaderMain'

function NewsMain() {
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

        <div className="blog__standard section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8 lg-mb-30">
                        <div className="blog__standard-item">                        
                            <div className="blog__standard-item-image">
                                <a href="blog-details.html"><img src="assets/img/blog-4.jpg" alt="" /></a>
                            </div>
                            <div className="blog__standard-item-meta">
                                <ul>
                                    <li><a href="#"><i className="far fa-calendar-alt"></i>09 June, 2022</a></li>
                                    <li><a href="#"><i className="far fa-comments"></i>2 Comment</a></li>
                                </ul>
                            </div>
                            <div className="blog__standard-item-content">
                                <h3><a href="blog-details.html">20 Beautiful Portfolios For Designers & Artists</a></h3>
                                <p>Pellentesque a placerat orci. Suspendisse rutrum lacus ipsum, eu vulputate augue blandit mollis. Integer vitae mi urna. Nam ultricies velit non tristique varius. Suspendisse sit amet molestie tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                <a className="simple-btn mt-35" href="blog-details.html">Discover More<i className="far fa-long-arrow-right"></i></a>
                            </div>
                        </div>
                        <div className="blog__standard-item">                        
                            <div className="blog__standard-item-image">
                                <a href="blog-details.html"><img src="assets/img/blog-5.jpg" alt="" /></a>
                            </div>
                            <div className="blog__standard-item-meta">
                                <ul>
                                    <li><a href="#"><i className="far fa-calendar-alt"></i>07 June, 2022</a></li>
                                    <li><a href="#"><i className="far fa-comments"></i>3 Comment</a></li>
                                </ul>
                            </div>
                            <div className="blog__standard-item-content">
                                <h3><a href="blog-details.html">20 Beautiful Portfolios For Designers & Artists</a></h3>
                                <p>Pellentesque a placerat orci. Suspendisse rutrum lacus ipsum, eu vulputate augue blandit mollis. Integer vitae mi urna. Nam ultricies velit non tristique varius. Suspendisse sit amet molestie tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                <a className="simple-btn mt-35" href="blog-details.html">Discover More<i className="far fa-long-arrow-right"></i></a>
                            </div>
                        </div>
                        <div className="blog__standard-item">                        
                            <div className="blog__standard-item-image">
                                <a href="blog-details.html"><img src="assets/img/blog-6.jpg" alt="" /></a>
                            </div>
                            <div className="blog__standard-item-meta">
                                <ul>
                                    <li><a href="#"><i className="far fa-calendar-alt"></i>04 June, 2022</a></li>
                                    <li><a href="#"><i className="far fa-comments"></i>5 Comment</a></li>
                                </ul>
                            </div>
                            <div className="blog__standard-item-content">
                                <h3><a href="blog-details.html">20 Beautiful Portfolios For Designers & Artists</a></h3>
                                <p>Pellentesque a placerat orci. Suspendisse rutrum lacus ipsum, eu vulputate augue blandit mollis. Integer vitae mi urna. Nam ultricies velit non tristique varius. Suspendisse sit amet molestie tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                <a className="simple-btn mt-35" href="blog-details.html">Discover More<i className="far fa-long-arrow-right"></i></a>
                            </div>
                        </div>
                        <div className="blog__standard-item">                        
                            <div className="blog__standard-item-image">
                                <a href="blog-details.html"><img src="assets/img/blog-7.jpg" alt="" /></a>
                            </div>
                            <div className="blog__standard-item-meta">
                                <ul>
                                    <li><a href="#"><i className="far fa-calendar-alt"></i>02 June, 2022</a></li>
                                    <li><a href="#"><i className="far fa-comments"></i>2 Comment</a></li>
                                </ul>
                            </div>
                            <div className="blog__standard-item-content">
                                <h3><a href="blog-details.html">20 Beautiful Portfolios For Designers & Artists</a></h3>
                                <p>Pellentesque a placerat orci. Suspendisse rutrum lacus ipsum, eu vulputate augue blandit mollis. Integer vitae mi urna. Nam ultricies velit non tristique varius. Suspendisse sit amet molestie tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                <a className="simple-btn mt-35" href="blog-details.html">Discover More<i className="far fa-long-arrow-right"></i></a>
                            </div>
                        </div>
                        <div className="pagination mt-50">
                            <ul>
                                <li><a className="active" href="#">01</a>
                                </li>
                                <li><a href="#">02</a>
                                </li>
                                <li><a href="#">03</a>
                                </li>
                                <li><a href="#"><i className="far fa-ellipsis-h"></i></a>
                                </li>
                                <li><a href="#">08</a>
                                </li>
                            </ul>
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

  )}

export default NewsMain