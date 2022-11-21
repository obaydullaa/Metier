import React from 'react'
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {PortfolioItem, PortfolioMenuData } from './portfoliodata';



function HomeThreePortfolio() {
    const [items, setItems] = useState(PortfolioItem);
    const [menuItems, setMenuItems] = useState(PortfolioMenuData);

    const [btnActive, setBtnActive] = useState(null);

    let filterActiveBtn = 'active';

    // const filterItem = (categItem, id) => {
    //     console.log(categItem)
    //     const updatedItems = PortfolioItem.filter((curElem) => {
    //         return curElem.category === categItem;
    //     });
    //     setItems(updatedItems)
        
    //     setBtnActive(id)
    // }

    const handleClick = (menu) => {
    // modified clicked menu isActive field
      const modifiedMenus = menuItems.map((singleMenu) => {
        if (singleMenu.id === menu.id) {
          singleMenu.isActive = true;
          return singleMenu;
        } else {
          singleMenu.isActive = false;
          return singleMenu;
        }
      });
      setMenuItems(modifiedMenus)


      // filtered data
      
      const filteredPortfolio = PortfolioItem.filter((portfolio) => 
      menu.label === 'Show All' ? 
      portfolio : portfolio.link.includes(menu.label)
      ); 
      
      setItems(filteredPortfolio);

    };
      //   // filtered data
      //   const filteredProjects = projectsDataFromDB.filter((project) =>
      //   menu?.keyword?.toLowerCase() === "all"
      //     ? project
      //     : project?.tags?.toLowerCase().includes(menu?.keyword?.toLowerCase())
      // );
      // setProjects(filteredProjects);

  return (
	<div className="portfolio__area-two section-padding">
		<div className="container">
			<div className="row">
				<div className="col-xl-12 mb-60">
					<div className="portfolio__area-two-title"> <span className="subtitle-one">Portfolio</span>
						<h2>Create Portfolio</h2> </div>
					<div className="portfolio__area-two-btn">
						<ul>
							{
                menuItems.map((menu) => {
                  return (
                    <li className={ menu.isActive ? 'active' : ''}
                    onClick={() => handleClick(menu)}
                    key= {menu.id}>

                        {menu.label}

                    </li>
                  )
                })
              }
						</ul>
					</div>
				</div>
			</div>
			<div className="row portfolio__area-two-active">
        {
          items.map((elem, i) => {
            const {id, image, content, link } = elem;
            return (
              <div key={i} className="col-xl-4 col-lg-4 col-md-6 portfolio-item mb-30">
                  <div className="portfolio__area-two-item"> 
                      <img className="img__full" src={image} alt={id}/>
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