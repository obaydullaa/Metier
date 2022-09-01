import React from 'react'

function HomeTwoBlog() {
  return (
    <div className="blog__area section-padding">
        <div className="container">
            <div className="row mb-60">
                <div className="col-xl-12">
                    <div className="blog__area-title"> <span className="subtitle-one">News & Blog</span>
                        <h2>News & Insights</h2> </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6 lg-mb-30">
                    <div className="blog__area-item">
                        <div className="blog__area-item-image"> 
                            <a href="blog-details.html"><img src="assets/img/blog-1.jpg" alt="" /></a>
                        </div>
                        <div className="blog__area-item-content">
                            <div className="blog__area-item-content-meta">
                                <ul>
                                    <li><a href="#"><i className="fal fa-calendar-alt"></i>05 June, 2022</a></li>
                                    <li><a href="#"><i className="fal fa-comments"></i>3 Comment</a></li>
                                </ul>
                            </div>
                            <h4><a href="blog-details.html">20 Beautiful Portfolios For Designers & Artists</a></h4> <a className="simple-btn" href="blog-details.html">Read More</a> </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 md-mb-30">
                    <div className="blog__area-item">
                        <div className="blog__area-item-image">
                            <a href="blog-details.html"><img src="assets/img/blog-2.jpg" alt="" /></a>
                        </div>
                        <div className="blog__area-item-content">
                            <div className="blog__area-item-content-meta">
                                <ul>
                                    <li><a href="#"><i className="fal fa-calendar-alt"></i>05 June, 2022</a></li>
                                    <li><a href="#"><i className="fal fa-comments"></i>3 Comment</a></li>
                                </ul>
                            </div>
                            <h4><a href="blog-details.html">The Best Way to Build Your Portfolio</a></h4> <a className="simple-btn" href="blog-details.html">Read More</a> </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="blog__area-item">
                        <div className="blog__area-item-image">
                            <a href="blog-details.html"><img src="assets/img/blog-3.jpg" alt="" /></a>
                        </div>
                        <div className="blog__area-item-content">
                            <div className="blog__area-item-content-meta">
                                <ul>
                                    <li><a href="#"><i className="fal fa-calendar-alt"></i>05 June, 2022</a></li>
                                    <li><a href="#"><i className="fal fa-comments"></i>3 Comment</a></li>
                                </ul>
                            </div>
                            <h4><a href="blog-details.html">Get Your Portfolio Ready in 15 Minutes</a></h4> <a className="simple-btn" href="blog-details.html">Read More</a> </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeTwoBlog