import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

function HomeThreeSponsors() {
  return (
    <div className="sponsors__area">
        <div className="container">
            <div className="row">
                <div className="col-xl-6"></div>
                <div className="col-xl-6">
                <Swiper
                        slidesPerView={3}
                        loop={true}
                        spaceBetween={50} 
                        className="mySwiper" >
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
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeThreeSponsors