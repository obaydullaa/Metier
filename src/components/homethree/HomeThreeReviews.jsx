import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

function HomeThreeReviews() {
  return (
    <div className="reviews__area"
    style={{
        backgroundImage: `url("assets/img/reviews.jpg")`,
    }}
>
        <div className="container">
            <div className="row">
                <div className="col-xl-6 col-lg-8">
                    <div className="reviews__area-left">
                        <div className="reviews__area-left-title">
                            <h2>Client Reviews</h2> </div>
                        <div className="swiper reviews">
                            <Swiper
                            slidesPerView={1}
                            loop={true}
                            spaceBetween={50} 
                            pagination={true} 
                            modules={[Pagination]} 
                            className="mySwiper">
                                <Swiper className="swiper-wrapper">
                                <SwiperSlide className="reviews__area-left-item swiper-slide">
                                    <p>Pellentesque luctus elit justo, sit amet rutrum purus pulvinar nec. Praesent rutrum porttitor nunc nec tristique. Vivamus molestie sapien in ornare ornare. Duis blandit metus a ipsum commodo</p>
                                    <div className="reviews__area-left-item-client">
                                        <div className="reviews__area-left-item-client-avatar"> <img src="assets/img/avatar/client.jpg"alt="" /> </div>
                                        <div className="reviews__area-left-item-client-content">
                                            <h5>David Beckham</h5> <span>UI Designer</span> </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="reviews__area-left-item swiper-slide">
                                    <p>Pellentesque luctus elit justo, sit amet rutrum purus pulvinar nec. Praesent rutrum porttitor nunc nec tristique. Vivamus molestie sapien in ornare ornare. Duis blandit metus a ipsum commodo</p>
                                    <div className="reviews__area-left-item-client">
                                        <div className="reviews__area-left-item-client-avatar"> <img src="assets/img/avatar/client-1.jpg"alt="" /> </div>
                                        <div className="reviews__area-left-item-client-content">
                                            <h5>Philip Kotler</h5> <span>UI Designer</span> </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="reviews__area-left-item swiper-slide">
                                    <p>Pellentesque luctus elit justo, sit amet rutrum purus pulvinar nec. Praesent rutrum porttitor nunc nec tristique. Vivamus molestie sapien in ornare ornare. Duis blandit metus a ipsum commodo</p>
                                    <div className="reviews__area-left-item-client">
                                        <div className="reviews__area-left-item-client-avatar"> <img src="assets/img/avatar/client-2.jpg"alt="" /> </div>
                                        <div className="reviews__area-left-item-client-content">
                                            <h5>Janet Jackson</h5> <span>UI Designer</span> </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="reviews__area-left-item swiper-slide">
                                    <p>Pellentesque luctus elit justo, sit amet rutrum purus pulvinar nec. Praesent rutrum porttitor nunc nec tristique. Vivamus molestie sapien in ornare ornare. Duis blandit metus a ipsum commodo</p>
                                    <div className="reviews__area-left-item-client">
                                        <div className="reviews__area-left-item-client-avatar"> <img src="assets/img/avatar/client-3.jpg"alt="" /> </div>
                                        <div className="reviews__area-left-item-client-content">
                                            <h5>Paris Jackson</h5> <span>UI Designer</span> </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                            </Swiper>
                            
                        </div>
                        <div className="reviews__area-left-quote"><img src="assets/img/icon/quote.png"alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeThreeReviews;