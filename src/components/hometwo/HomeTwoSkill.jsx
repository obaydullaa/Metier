import React from 'react'

function HomeTwoSkill() {
  return (
    <div className="skill__area" data-background="assets/img/skill.jpg">
        <div className="container">
            <div className="row">
                <div className="col-xl-6 col-lg-4 lg-mb-50">
                    <div className="skill__area-left">
                        <div className="skill__area-left-play-icon video-pulse"> <a className="video-popup" href="https://www.youtube.com/watch?v=0WC-tD-njcA"><i className="fas fa-play"></i></a> </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-8">
                    <div className="skill__area-right">
                        <div className="skill__area-right-title mb-30">
                            <h2>My Skill</h2> </div>
                        <div className="skill__area-right-skill">
                            <div className="skill__area-right-skill-item">
                                <div className="skill__area-right-skill-item-content">
                                    <h6>Development</h6> <span className="skill__area-right-skill-item-count">
                                    <span className="counter">80</span>%</span>
                                </div>
                                <div className="skill__area-right-skill-item-inner">
                                    <div className="skill__area-right-skill-item-bar" data-width="80"></div>
                                </div>
                            </div>
                        </div>
                        <div className="skill__area-right-skill mt-30">
                            <div className="skill__area-right-skill-item">
                                <div className="skill__area-right-skill-item-content">
                                    <h6>Designing</h6> <span className="skill__area-right-skill-item-count">
                                    <span className="counter">70</span>%</span>
                                </div>
                                <div className="skill__area-right-skill-item-inner">
                                    <div className="skill__area-right-skill-item-bar" data-width="70"></div>
                                </div>
                            </div>
                        </div>
                        <div className="skill__area-right-skill mt-30">
                            <div className="skill__area-right-skill-item">
                                <div className="skill__area-right-skill-item-content">
                                    <h6>Marketing</h6> <span className="skill__area-right-skill-item-count">
                                    <span className="counter">75</span>%</span>
                                </div>
                                <div className="skill__area-right-skill-item-inner">
                                    <div className="skill__area-right-skill-item-bar" data-width="75"></div>
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

export default HomeTwoSkill