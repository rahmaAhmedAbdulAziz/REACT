import React from "react";
import "./Body.css"
const Body = () => {
return  ( <div className="container-fluid">
    <div className="row bg-dark text-white">
      <div className="row  ">
        <h1 style={{textAlign : "center" , color:"white"}}>skills </h1>
        <h3 style={{textAlign : "center" , color:"white"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Ipsam neque nulla harum qui beatae magnam quisquam saepe,
          reiciendis quos cumque recusandae ex veniam. Veritatis quas maiores,
          tenetur nisi repellat reiciendis?</h3>
      </div>
  
      <div className="col-6">
        <h2 style={{textdecoration : "underline"}}> MY Fouces </h2>
        <div className="container">
          <div className="row">
            <div className="col-5 text-align: center;" id="text">
              <h3 style={{color:"white"}} >
                front end <br/>
                node <br/>
                bootstrsp <br/>
                mango <br/>
                scss <br/>
                angular <br/>
              </h3>
            </div>
            <div className="col-6 container-fluid" style={{ padding: "-1px" }}>

<div className="progress m-3" style={{ height: "20px" }}>
  <div className="progress-bar" role="progressbar" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0"
    aria-valuemax="100"></div>
</div>
<div className="progress m-3" style={{ height: "20px" }}>
  <div className="progress-bar" role="progressbar" style={{ width: "95%" }} aria-valuenow="100" aria-valuemin="0"
    aria-valuemax="100"></div>
</div>
<div className="progress m-3" style={{ height: "20px" }}>
  <div className="progress-bar" role="progressbar" style={{ width: "90%" }} aria-valuenow="25" aria-valuemin="0"
    aria-valuemax="100"></div>
</div>
<div className="progress m-3" style={{ height: "20px" }}>
  <div className="progress-bar" role="progressbar" style={{ width: "85%" }} aria-valuenow="50" aria-valuemin="0"
    aria-valuemax="100"></div>
</div>

<div className="progress m-3" style={{ height: "20px" }}>
  <div className="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="50" aria-valuemin="0"
    aria-valuemax="100"></div>
</div>
<div className="progress m-3" style={{ height: "20px" }}>
  <div className="progress-bar" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0"
    aria-valuemax="100"></div>
</div>


</div>
  
            </div>
          </div>
  
        </div>

        
      </div>
    </div>

  
)

}

export default Body;