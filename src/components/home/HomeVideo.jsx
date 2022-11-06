import React from 'react'
import { useEffect } from 'react'
import Venobox from 'venobox'

function HomeVideo() {
  useEffect(() => {
    new Venobox({
      autoPlay: false,
      spinner: 'wave',
    })
  }, [])
  
  return ( 
    <div className="video__area"
    style={{
      backgroundImage: `url("assets/img/video.jpg")`,
    }}
    >
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="video__area-play-icon video-pulse"> 
                      <a className="video-popup venobox" 
                      data-vbtype='video'
                      href="https://www.youtube.com/watch?v=R0DRswGyArM">
                        <i className="fas fa-play"></i>
                      </a> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeVideo