import React from 'react'
const skillData = [
    {
      label: "Development",
      percentagePosition: "80%",
      percentageNo: "80%",
    },
    {
      label: "Designing",
      percentagePosition: "90%",
      percentageNo: "90%",
    },
    {
      label: "Marketing",
      percentagePosition: "70%",
      percentageNo: "70%",
    },
  ];

function HomeThreeSkill() {
  return (
    <div className="skill__area-two">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-xl-7 col-lg-7 lg-mb-30">
                    <div className="skill__area-two-left"> <span>My Skills</span> <img src="assets/img/skills.png"alt="" /> </div>
                </div>
                <div className="col-xl-5 col-lg-5">
                    <div className="skill__area-two-right">

                        {/* {
                            skillData.map((elem, i) => {
                                return (
                                    <div className="skill__area-two-right-skill">
                                        <div className="skill__area-two-right-skill-item">
                                            <div className="skill__area-two-right-skill-item-content">
                                                <h6>{elem.label}</h6> <span className="skill__area-two-right-skill-item-count">
                                                <span className="counter"></span>{elem.percentageNo}</span>
                                            </div>
                                            <div className="skill__area-two-right-skill-item-inner">
                                                <div className="skill__area-two-right-skill-item-bar" data-width="{elem.label}">
                                                {elem.percentagePosition}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        } */}
              
                        

                        {/* <div className="skill__area-two-right-skill mt-30">
                            <div className="skill__area-two-right-skill-item">
                                <div className="skill__area-two-right-skill-item-content">
                                    <h6>Designing</h6> <span className="skill__area-two-right-skill-item-count">
                                    <span className="counter">90</span>%</span>
                                </div>
                                <div className="skill__area-two-right-skill-item-inner">
                                    <div className="skill__area-two-right-skill-item-bar" data-width="90"></div>
                                </div>
                            </div>
                        </div>
                        <div className="skill__area-two-right-skill mt-30">
                            <div className="skill__area-two-right-skill-item">
                                <div className="skill__area-two-right-skill-item-content">
                                    <h6>Marketing</h6> <span className="skill__area-two-right-skill-item-count">
                                    <span className="counter">70</span>%</span>
                                </div>
                                <div className="skill__area-two-right-skill-item-inner">
                                    <div className="skill__area-two-right-skill-item-bar" data-width="70"></div>
                                </div>
                            </div>
                        </div> */}

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeThreeSkill