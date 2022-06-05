import React from 'react';
import './Navbar.css';
import {BrowserRouter, Link, NavLink} from 'react-router-dom';

class Navbar extends React.Component {
    state = {};
    render() {
        return (
          
<nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{justifyContent:"space-between", alignItems:"centre", display:"flex", borderBottomStyle:"solid", borderBottomColor:"white"}}>
        <a className="navbar-brand" href="#" style={{fontSize:"35px", paddingLeft:"50px"}}>Experience Mars In VR</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto"  >
            <li className="nav-item active" >
              <a className="nav-link" href="#" style={{fontSize:"22px", paddingRight:"50px" }} ><NavLink to ="/" style={{ textDecoration: 'none' }}>Home</NavLink> <span className="sr-only"></span></a>
            </li>
            <li className="nav-item"   >
              <a className="nav-link" href="#" style={{fontSize:"22px", paddingRight:"50px"}}><NavLink to ="/registration" style={{ textDecoration: 'none' }}>Registration</NavLink></a>
            </li>
            <li className="nav-item"   >
              <a className="nav-link" href="#" style={{fontSize:"22px", paddingRight:"150px"}}><NavLink to ="/services" style={{ textDecoration: 'none' }}>Fly Services</NavLink></a>
            </li>
      
            
          </ul>
          <img src='logo512.png'/>
          
        </div>
      </nav>
        
        );
    }
}

export default Navbar;
