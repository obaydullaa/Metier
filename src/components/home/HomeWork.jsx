import React from 'react'
import { useState } from 'react'

function Work() {
    const [accordion, setAccordion] = useState(1)

    const toggleAccordion = (id) => {
        if(accordion === id) {
            setAccordion(-1)
            return;
        }
        setAccordion(id)
    }

  return (          
    <div className="work__area section-padding">
        <div className="container">
            <div className="row mb-60">
                <div className="col-xl-12">
                    <div className="work__area-title lg-t-center"> 
                        <span className="subtitle one">How IT Work</span>
                        <h2>Simple Work Process</h2> </div>
                </div>
            </div>
            <div className="row mb-110">
                <div className="col-xl-4 col-lg-4 col-md-6 pr-110 lg-mb-30">
                    <div className="work__area-item"> <span>01</span>
                        <div className="work__area-item-icon"> <img src="assets/img/icon/work-1.png" alt="" /> </div>
                        <div className="work__area-item-content">
                            <h4>Concept Creation</h4>
                            <p>pellentesque in dolor vel malesuada. Donec finibus libero odio</p>
                        </div>
                        <div className="work__area-item-shape"> <img src="assets/img/icon/shape-1.png" alt="" /> </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 pl-55 pr-55 md-mb-30">
                    <div className="work__area-item"> <span>02</span>
                        <div className="work__area-item-icon"> <img src="assets/img/icon/work-2.png" alt="" /> </div>
                        <div className="work__area-item-content">
                            <h4>Sketch Drawing</h4>
                            <p>pellentesque in dolor vel malesuada. Donec finibus libero odio</p>
                        </div>
                        <div className="work__area-item-shape"> <img src="assets/img/icon/shape-2.png" alt="" /> </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 pl-110">
                    <div className="work__area-item"> <span>03</span>
                        <div className="work__area-item-icon"> <img src="assets/img/icon/work-3.png" alt="" /> </div>
                        <div className="work__area-item-content">
                            <h4>Final Design</h4>
                            <p>pellentesque in dolor vel malesuada. Donec finibus libero odio</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-12">
                    <div className="faq">
                        <div className="faq-item" onClick={()=> toggleAccordion(1)}>
                            <div className="faq-item-card">
                                <div className={`faq-item-card-header ${accordion === 1 ? 'active' : ''}`}>
                                    <h5>What are the acceptable formats for the portfolio ?</h5> 
                                    {accordion === 1 ? (<><i className="fal fa-angle-up"></i> </>) :
                                        (<><i className="fal fa-angle-down"></i> </>)
                                    }
                                </div>
                                <div className={`faq-item-card-header-content ${accordion === 1 ? 'active': 'inactive'} `}>
                                    <p>pellentesque in dolor vel malesuada. Donec finibus libero odio, ac iaculis metus mattis quis. Curabitur a tincidunt risus, non gravida ipsum. Sed at ligula porta, dictum magna id, molestie mi. Mauris et ligula dui. Aliquam erat volutpat. Nam pharetra, risus vitae bibendum pellentesque, dui metus convallis felis, non semper leo leo nec augue. Maecenas vestibulum ornare iaculis. Integer elit arcu, lobortis id felis eu, scelerisque maximus libero.</p>
                                </div>
                            </div>
                        </div>
                        <div className="faq-item" onClick={()=> toggleAccordion(2)}>
                            <div className="faq-item-card">
                                <div className={`faq-item-card-header ${accordion === 2 ? 'active' : ''}`}>
                                    <h5>Protect Your Business with Insurance ?</h5> 
                                    {accordion === 2 ? (<><i className="fal fa-angle-up"></i> </>) :
                                        (<><i className="fal fa-angle-down"></i> </>)
                                    }
                                </div>
                                <div className={`faq-item-card-header-content ${accordion === 2 ? 'active': 'inactive'} `}>
                                    <p>pellentesque in dolor vel malesuada. Donec finibus libero odio, ac iaculis metus mattis quis. Curabitur a tincidunt risus, non gravida ipsum. Sed at ligula porta, dictum magna id, molestie mi. Mauris et ligula dui. Aliquam erat volutpat. Nam pharetra, risus vitae bibendum pellentesque, dui metus convallis felis, non semper leo leo nec augue. Maecenas vestibulum ornare iaculis. Integer elit arcu, lobortis id felis eu, scelerisque maximus libero.</p>
                                </div>
                            </div>
                        </div>
                        <div className="faq-item m-0" onClick={()=> toggleAccordion(3)}>
                            <div className="faq-item-card">
                                <div className={`faq-item-card-header ${accordion === 3 ? 'active' : ''}`}>
                                    <h5>Open a Business Bank Account ?</h5> 
                                    {accordion === 3 ? (<><i className="fal fa-angle-up"></i> </>) :
                                        (<><i className="fal fa-angle-down"></i> </>)
                                    } 
                                </div>
                                <div className={`faq-item-card-header-content ${accordion === 3 ? 'active': 'inactive'} `}>
                                    <p>pellentesque in dolor vel malesuada. Donec finibus libero odio, ac iaculis metus mattis quis. Curabitur a tincidunt risus, non gravida ipsum. Sed at ligula porta, dictum magna id, molestie mi. Mauris et ligula dui. Aliquam erat volutpat. Nam pharetra, risus vitae bibendum pellentesque, dui metus convallis felis, non semper leo leo nec augue. Maecenas vestibulum ornare iaculis. Integer elit arcu, lobortis id felis eu, scelerisque maximus libero.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work