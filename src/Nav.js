import React from 'react'
import { BrowserRouter , Route} from 'react-router-dom';
import {link , NavLink} from 'react-router-dom';
function Nav() {
  return (
    <div className="container">
    <div className="row">
        <div className="col-4 bg-Light pt-5" style={{height: "250px" }}>
            <h1>About me</h1>
        </div>
    <div className="col-8 pt-5">
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Neque, id veniam at ex cupiditate reiciendis alias. 
             Aut molestias incidunt aperiam.
             Voluptates tempora itaque et dolorem nulla repellendus dolores quae est.</h3>
             <a download href="./app.html" className="download-btn bg-dark text-white ">Dowenloud Resume<i className="fa fa-downloud"></i></a>
        
        </div>
        </div>
    </div>
  )
}

export default Nav