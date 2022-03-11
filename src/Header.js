// import { render } from "@testing-library/react";
import React from "react";
import "./Header.css";
// import image from "./asset/img.jpg"
import { useState } from "react";

   

 function Header(props) {
//      const name = props.name;
//      const jobTitle = props.jobTitle


     const [obj,setObj]=useState({name:"Rahma Ahmed AbdulAziz",jobTitle:"webDevloper"})
  //  state={
  //       name: "rahma",
  //       jobTitle : "webDevloper"
  //   }
      return (
                <>
<div id="img" className="container-fluid" style={{ height: "200px" , width: "100%"}}>
    <div className="row">
      <div className="col-6">
        <h1 >{obj.name}</h1>
        <h3>{obj.jobTitle}</h3>
        <button type="button" className="btn bg-dark text-light text-center p-1">contant with me</button>
  
    <div className="bg-img">
  
      {/* <img src={image} alt="Italian Trulli"/> */}
    </div>
  </div>
    </div>
  </div>     
  </>
         )
          }
          
    
        

   export default Header;
//     state = {
//         name: ''
//       }
       
      
//       handel = (e)=>{
//         this.setstate({
//           name : e.target.value
//         })
//       }
      




//        clicked(){
//            console.log("click")
//        }
// state={
//     name: "rahma",
//     age : 25

// }
// change = () => {
//     this .setState({
//         name:"ahmed"
//     })
// }

//     constructor() {
//         super()
//         this.state={name:"rahma"}
//     }
    
// render() {

// // return   .  >0 ?(        ):()
// // if(.  >) { }

// return <div classNameName="rr">
// <h1>{this.state.name}</h1> 
// <button onClick={this.clicked}>click</button>
// <button onClick={this.change}>click</button>
//       <form onSubmit={this.handel}>
//         <textarea onChange={this.handel}/>
//         <button>submite</button>
//         <select onChange={this.handel}>
//           <option value="value1">val1</option>
//           <option value="value2">val2</option>
//           <option value="value3">val3</option>

//       </select>
//       </form>
   
// </div>

// }
// }



// export default Header ;