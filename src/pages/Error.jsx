import React from 'react'
import FooterMain from '../components/layouts/footer/FooterMain'
import HeaderMain from '../components/layouts/header/HeaderMain'

function Error() {
  return (
    <>
      <div className="custom__cursor-one"></div>
      <div className="custom__cursor-two"></div>
      {/* <!-- Preloader start -->
      <div classNameName="theme-loader">
        <div classNameName="spinner">
          <div classNameName="double-bounce1"></div>
          <div classNameName="double-bounce2"></div>
        </div>
      </div> */}
      <HeaderMain/>

        <div className="error__page">
          <div className="container">
              <div className="row">
                  <div className="col-xl-12">
                      <div className="error__page-content">
                          <h1>404</h1>
                          <p>The page you are looking for does not exist!</p>
                          <a className="theme-btn-1" href="index.html">go Back to Home page<i className="fal fa-long-arrow-right"></i></a>
                      </div>
                  </div>
              </div>
          </div>
        </div>

      <FooterMain/>

    </>
  )
}
export default Error