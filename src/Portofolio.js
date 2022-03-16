import React from "react";
import Portofolio from "./portofolio.css"
import PortfolioItem from "./portofolioItem";

// import React from 'react'

function Portfolio() {
  const items = ["Web design", "Mobile Design", "Logo Design", "Web Application Development", " Mobile Application Development", "PWA Development"]
  return (
    <div className="container-fluid bg-secondary d-flex justify-content-around align-items-center p-5">
      <div className="row">
        <h1>portfolio</h1>
        {items.map(item => {
          return <div className="col-4">
            <PortfolioItem itemName={item} />
          </div>
        })}
      </div>
    </div>
  )
}

export default Portfolio