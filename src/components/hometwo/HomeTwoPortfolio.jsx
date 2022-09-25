import React, { useState } from 'react'

function HomeTwoPortfolio() {
    const [isHovering, setIsHovering ] = useState(null);
    let activeStyle = 'portfolio__area-item-hover';
    const handleHover = (id) => {
       setIsHovering(id)
   }
  return (
    <div className="portfolio__area section-padding">
        <div className="container">
            <div className="row mb-60">
                <div className="col-xl-12">
                    <div className="portfolio__area-title lg-t-center"> <span className="subtitle">Portfolio</span>
                        <h2>Create Portfolio</h2> </div>
                </div>
            </div>
            <div className="row mb-30">
                <div className="col-xl-4 col-lg-4 lg-mb-30">
                    <div onMouseOver={() => handleHover(1)}
                     className={` ${isHovering === 1 ? activeStyle : ''} portfolio__area-item`}>
                        <div className="portfolio__area-item-image"> <img className="img__full" src="assets/img/portfolio/portfolio-1.jpg" alt="" />
                            <div className="portfolio__area-item-image-content">
                                <div className="portfolio__area-item-image-content-text"> <span>Photography</span>
                                    <h4><a href="portfolio-details.html">Photography</a></h4> </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-8 col-lg-8">
                    <div onMouseOver={() => handleHover(6)}
                     className={` ${isHovering === 6 ? activeStyle : ''} portfolio__area-item`}>
                        <div className="portfolio__area-item-image"> <img className="img__full" src="assets/img/portfolio/portfolio-2.jpg" alt="" />
                            <div className="portfolio__area-item-image-content">
                                <div className="portfolio__area-item-image-content-text"> <span>Photography</span>
                                    <h4><a href="portfolio-details.html">Photography</a></h4> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mb-30">
                <div className="col-xl-8 col-lg-8 lg-mb-30">
                    <div onMouseOver={() => handleHover(2)}
                     className={` ${isHovering === 2 ? activeStyle : ''} portfolio__area-item`}>
                        <div className="portfolio__area-item-image"> <img className="img__full" src="assets/img/portfolio/portfolio-3.jpg" alt="" />
                            <div className="portfolio__area-item-image-content">
                                <div className="portfolio__area-item-image-content-text"> <span>Photography</span>
                                    <h4><a href="portfolio-details.html">Photography</a></h4> </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4">
                    <div onMouseOver={() => handleHover(3)}
                     className={` ${isHovering === 3 ? activeStyle : ''} portfolio__area-item`}>
                        <div className="portfolio__area-item-image"> <img className="img__full" src="assets/img/portfolio/portfolio-4.jpg" alt="" />
                            <div className="portfolio__area-item-image-content">
                                <div className="portfolio__area-item-image-content-text"> <span>Photography</span>
                                    <h4><a href="portfolio-details.html">Photography</a></h4> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-6 col-lg-6 lg-mb-30">
                    <div onMouseOver={() => handleHover(4)}
                     className={` ${isHovering === 4 ? activeStyle : ''} portfolio__area-item`}>
                        <div className="portfolio__area-item-image"> <img className="img__full" src="assets/img/portfolio/portfolio-5.jpg" alt="" />
                            <div className="portfolio__area-item-image-content">
                                <div className="portfolio__area-item-image-content-text"> <span>Photography</span>
                                    <h4><a href="portfolio-details.html">Photography</a></h4> </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                    <div onMouseOver={() => handleHover(5)}
                     className={` ${isHovering === 5 ? activeStyle : ''} portfolio__area-item`}>
                        <div className="portfolio__area-item-image"> <img className="img__full" src="assets/img/portfolio/portfolio-6.jpg" alt="" />
                            <div className="portfolio__area-item-image-content">
                                <div className="portfolio__area-item-image-content-text"> <span>Photography</span>
                                    <h4><a href="#">Photography</a></h4> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeTwoPortfolio