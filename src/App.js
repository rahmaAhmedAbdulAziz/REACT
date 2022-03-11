 import React from 'react'
import './App.css';
import Body from './Body';
import Header from './Header.js';
import Nav from './Nav';
import Portofolio from './Portofolio';
import {BrowserRouter , Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css"
import Footer from './Footer.js'


// state = {
//   name: ''
// }


// handel = (e)=>{
//   this.setstate({
//     name : e.target.value
//   })
// }


function App() {
  return (
    <BrowserRouter>
    <div className="App">
  
<Header/>
{/* <image/> */}
<Nav/>
{/* <Route path='/' component={Nav} */}
<Body/>
<Portofolio/>
<Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
