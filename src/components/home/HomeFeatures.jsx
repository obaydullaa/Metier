import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom';

// const featursList = [
//     {
//         id: 1,
//         img: "assets/img/features-1.jpg",

//     }
// ]

function HomeFeatures() {
    const [isHovering, setIsHovering] = useState(null);

    let activeStyle = 'features__area-item-hover'


    const handleHover = (id) => {
        setIsHovering(id)
    }

  return (
    <>
        <div className="features__area">
            <div className="container-fluid px-0">
                <div className="row gx-0">
                    <div className="col-xl-12">
                        <Swiper
                             slidesPerView={4}
                             spaceBetween={0}
                             loop={true}
                             className="mySwiper"
                        >
                            <Swiper className="swiper-wrapper">
                                <SwiperSlide>
                                    <div  onMouseOver={() => handleHover(1)}  
                                    className={` ${isHovering === 1 ? activeStyle : ''} features__area-item swiper-slide `}> 
                                
                                    <img src="assets/img/features-1.jpg" alt="" />
                                        <div className="features__area-item-content">
                                            <div className="features__area-item-content-icon"> 
                                                <Link to="/services-details">
                                                    <i className="fal fa-plus"></i>
                                                </Link> 
                                            </div>
                                            <h3><Link to="/services-details">Product Design</Link></h3>
                                            <p>Design strategy</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                
                                <SwiperSlide>
                                    <div  onMouseOver={() => handleHover(2)}  
                                    className={` ${isHovering === 2 ? activeStyle : ''} features__area-item swiper-slide `}> 

                                    <img src="assets/img/features-2.jpg" alt="" />
                                        <div className="features__area-item-content">
                                            <div className="features__area-item-content-icon"> 
                                                <Link to="/services-details">
                                                    <i className="fal fa-plus"></i>
                                                </Link> 
                                            </div>
                                            <h3><Link to="/services-details">Product Design</Link></h3>
                                            <p>Design strategy</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                
                                <SwiperSlide>
                                    <div  onMouseOver={() => handleHover(3)}  
                                    className={` ${isHovering === 3 ? activeStyle : ''} features__area-item swiper-slide `}>
                                    
                                    <img src="assets/img/features-3.jpg" alt="" />
                                        <div className="features__area-item-content">
                                            <div className="features__area-item-content-icon"> 
                                                <Link to="/services-details">
                                                    <i className="fal fa-plus"></i>
                                                </Link> 
                                            </div>
                                            <h3><Link to="/services-details">Product Design</Link></h3>
                                            <p>Design strategy</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                
                                <SwiperSlide>
                                    <div  onMouseOver={() => handleHover(4)}  
                                    className={` ${isHovering === 4 ? activeStyle : ''} features__area-item swiper-slide `}>  
                                    
                                    <img src="assets/img/features-4.jpg" alt="" />
                                        <div className="features__area-item-content">
                                            <div className="features__area-item-content-icon"> 
                                                <Link to="/services-details">
                                                    <i className="fal fa-plus"></i>
                                                </Link> 
                                            </div>
                                            <h3><Link to="/services-details">Product Design</Link></h3>
                                            <p>Design strategy</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                

                            </Swiper>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    </>
    
  )
}

export default HomeFeatures