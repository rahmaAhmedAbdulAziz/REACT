import React from "react";
import Portofolio from "./portofolio.css"

// import React from 'react'

function Portfolio() {
    return (
      <div className="container-fluid bg-secondary d-flex justify-content-around align-items-center p-5">
        <div className="row">
          <h1>portfolio</h1>
  
  
          <div className="col-4">
            <div className=" bg-dark m-5" style={{ color: "grey", width: "350px", height: "350px", border: "1px" }}>
              <h2
                style={{ textAlign: "center", paddingTop: "120px", marginTop: "20px", textDecoration: "underline" }}>
                Web design</h2>
            </div>
          </div>
  
          <div className="col-4">
            <div className="bg-dark m-5" style={{ color: "grey", width: "350px", height: "350px", border: "1px" }}>
              <h2
                style={{ textAlign: "center", paddingTop: "120px", marginTop: "20px", textDecoration: "underline" }}>
                Mobile Design</h2>
            </div>
          </div>
  
          <div className="col-4">
            <div className="bg-dark m-5" style={{ color: "grey", width: "350px", height: "350px", border: "1px" }}>
              <h2
                style={{ textAlign: "center", paddingTop: "120px", marginTop: "20px", textDecoration: "underline" }}>
                Logo Design</h2>
            </div>
          </div>
  
          <div className="col-4">
            <div className=" bg-dark m-5" style={{ color: "grey", width: "350px", height: "350px", border: "1px" }}>
              <h2
                style={{ textAlign: "center", paddingTop: "120px", marginTop: '20px', textDecoration: "underline" }}>
                Web Application Development</h2>
            </div>
          </div>
  
          <div className="col-4">
            <div className=" bg-dark m-5" style={{ color: "grey", width: "350px", height: "350px", border: "1px" }}>
              <h2
                style={{ textAlign: "center", paddingTop: "120px", marginTop: "20px", textDecoration: "underline" }}>
                Mobile Application Development</h2>
            </div>
          </div>
  
          <div className="col-4">
            <div className=" bg-dark m-5" style={{ color: "grey", width: "350px", height: "350px", border: "1px" }}>
              <h2
                style={{ textAlign: "center", paddingTop: "120px", marginTop: "20px", textDecoration: "underline" }}>
                PWA Development</h2>
            </div>
          </div>
  
        </div>
      </div >
  
    )
  }
  
  export default Portfolio