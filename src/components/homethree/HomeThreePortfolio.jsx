import React from 'react'
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import PortfolioData from './portfoliodata';





function HomeThreePortfolio() {
    const [items, setItems] = useState(PortfolioData);

    const filterItem = (categItem) => {
        console.log(categItem)
        const updatedItems = PortfolioData.filter((curElem) => {
            return curElem.category === categItem;
        });
        setItems(updatedItems)
    }

  return (
	<div className="portfolio__area-two section-padding">
		<div className="container">
			<div className="row">
				<div className="col-xl-12 mb-60">
					<div className="portfolio__area-two-title"> <span className="subtitle-one">Portfolio</span>
						<h2>Create Portfolio</h2> </div>
					<div className="portfolio__area-two-btn">
						<ul>
							<li className="active" 
                            onClick={() => setItems(PortfolioData)}>Show All</li>
							<li onClick={() => filterItem('design')}>Design</li>
							<li onClick={() => filterItem('development')}>Development</li>
							<li onClick={() => filterItem('marketing')}>Marketing</li>
							<li onClick={() => filterItem('strategy')}>Strategy</li>
							<li onClick={() => filterItem('branding')}>Branding</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="row portfolio__area-two-active">
                {
                    items.map((elem) => {
                        const {id, image, content, link } = elem;
                        return (
                            <div className="col-xl-4 col-lg-4 col-md-6 portfolio-item mb-30">
                                <div className="portfolio__area-two-item"> <img className="img__full" src={image} alt={id}/>
                                    <div className="portfolio__area-two-item-content">
                                        <span>{content}</span>
                                        <h4><a href="portfolio-details-2.html">{link}</a></h4> 
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
			</div>
		</div>
	</div>
  )
}

export default HomeThreePortfolio;