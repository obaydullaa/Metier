import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

function HomeTwoSponsors() {
  return (
    <div className="sponsors__area">
        <div className="container">
            <div className="row">
                <div className="col-xl-6">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={0}
                        loop={true}
                        spaceBetween={50} 
                        className="mySwiper"
                    >
                        <Swiper className="swiper-wrapper sponsors-slider">
                            <SwiperSlide>
                                <div className="sponsors__area-brand swiper-slide">
                                    <a href="#"><img src="assets/img/brand-1.png" alt="" /></a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="sponsors__area-brand swiper-slide">
                                    <a href="#"><img src="assets/img/brand-2.png" alt="" /></a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="sponsors__area-brand swiper-slide">
                                    <a href="#"><img src="assets/img/brand-3.png" alt="" /></a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="sponsors__area-brand swiper-slide">
                                    <a href="#"><img src="assets/img/brand-4.png" alt="" /></a>
                                </div>
                            </SwiperSlide>
                        </Swiper>

                    </Swiper>
                    {/* <div className="swiper sponsors-slider">
                        <div className="swiper-wrapper">
                            <div className="sponsors__area-brand swiper-slide">
                                <a href="#"><img src="assets/img/brand-1.png" alt="" /></a>
                            </div>
                            <div className="sponsors__area-brand swiper-slide">
                                <a href="#"><img src="assets/img/brand-2.png" alt="" /></a>
                            </div>
                            <div className="sponsors__area-brand swiper-slide">
                                <a href="#"><img src="assets/img/brand-3.png" alt="" /></a>
                            </div>
                            <div className="sponsors__area-brand swiper-slide">
                                <a href="#"><img src="assets/img/brand-4.png" alt="" /></a>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeTwoSponsors