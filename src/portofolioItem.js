import React from "react";
import Portofolio from "./portofolio.css"

// import React from 'react'

function PortfolioItem({ itemName }) {
  return (
    <div className=" bg-dark m-5" style={{ color: "grey", width: "350px", height: "350px", border: "1px" }}>
      <h2
        style={{ textAlign: "center", paddingTop: "120px", marginTop: "20px", textDecoration: "underline" }}>
        {itemName}
      </h2>
    </div>
  )
}

export default PortfolioItem