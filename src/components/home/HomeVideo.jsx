import React from 'react'

function HomeVideo() {
  return (
    <div className="video__area"
    style={{
      backgroundImage: `url("assets/img/video.jpg")`,
    }}
    >
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="video__area-play-icon video-pulse"> <a className="video-popup" href="https://www.youtube.com/watch?v=0WC-tD-njcA"><i className="fas fa-play"></i></a> </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeVideo