import React from 'react'
import { Link } from 'react-router-dom'
import FooterMain from '../layouts/footer/FooterMain'
import HeaderMain from '../layouts/header/HeaderMain'


function ErrorMain() {
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
                        <Link className="theme-btn-1" to="/">go Back to Home page<i className="fal fa-long-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
        </div>
      </div>

    <FooterMain/>

  </>
  )
}

export default ErrorMain