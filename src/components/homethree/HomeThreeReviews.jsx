import React from 'react'

function HomeThreeReviews() {
  return (
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
  )
}

export default HomeThreeReviews