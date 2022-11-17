import React from 'react'

import About from '../pages/About.jsx'
import Home from '../pages/Home'
import HomeThree from '../pages/HomeThree';
import HomeTwo from '../pages/HomeTwo';
import Services from '../pages/Services';
import ServiceDetails from '../pages/ServiceDetails';
import Error from '../pages/Error';
import PortfolioOne from '../pages/PortfolioOne';
import PortfolioTwo from '../pages/PortfolioTwo';
import PortfolioThree from '../pages/PortfolioThree';
import PortfolioDetailsOne from '../pages/PortfolioDetailsOne';
import PortfolioDetailsTwo from '../pages/PortfolioDetailsTwo';
import News from '../pages/News';
import NewsDetails from '../pages/NewsDetails';
import Contact from '../pages/Contact';
import { BrowserRouter, Routes, Route,} from "react-router-dom";

export default function () {
  return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path='/home' element={<Home />} />
          <Route path='/home-two' element={<HomeTwo />} />
          <Route path='/home-three' element={<HomeThree />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/services-details' element={<ServiceDetails />} />
          <Route path='/error' element={<Error />} />
          <Route path='/portfolio-one' element={<PortfolioOne />} />
          <Route path='/portfolio-two' element={<PortfolioTwo />} />
          <Route path='/portfolio-three' element={<PortfolioThree />} />
          <Route path='/portfolio-details-one' element={<PortfolioDetailsOne />} />
          <Route path='/portfolio-details-two' element={<PortfolioDetailsTwo />} />
          <Route path='/news' element={<News />} />
          <Route path='/news-details' element={<NewsDetails />} />
          <Route path='/contact' element={<Contact />} />

          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
  )
}
