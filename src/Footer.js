import React from 'react'
import "./Footer.css"

function footer() {
  return (
    <div className="container-fluid">
<div className="row" id='foot'>
    <div className="col-4">
        <h4>Get in touch</h4>
      <h5>  <i className=" fa-address-card"></i>rahma@gmail.com </h5>
      <h5><i className="fa-solid fa-envelope"></i>0123456679</h5>
    </div>
    <div className="col-4">
     <button type="button" className="btn" >contant with me</button>
    </div>
    <div className="col-4" style={{textAlign: "center"}}>
      <h6>  <i className="fa-brands fa-facebook-square">facebook</i></h6>
       <h6><i className="fa-brands fa-github"></i>githob</h6> 
       <h6 > @copy right</h6>
    </div>
</div>
</div>
  )
}

export default footer