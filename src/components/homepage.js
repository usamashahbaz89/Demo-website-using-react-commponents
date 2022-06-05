import React from "react";
import {Routes, Route} from 'react-router-dom';
import State from "./state";
class homepage extends React.Component {
    state = {  } 
    render() { 
        return (
                <>
                
                
            {/* <h4 style={{fontFamily:"sans-serif", backgroundColor:"black", color:"white"}}>More Stories</h4> */}
            
            {/* <div className="container-fluid" style={{height:"auto", width:"100%"}}>
                <div class="row">
                   <div className="col-sm-12" style={{height:"100px", backgroundColor:"red"}}>
                      Navbar
                   </div>
                                  
                       <div class="row">
                   <div className="col-lg-12" style={{height:"400px",backgroundColor:"orange"}}>
                  Body
                   </div>
                   <div class="row">
                   <div className="col-sm-12"  style={{height:"200px", backgroundColor:"yellow"}}>
                   footer
                   </div>
                   </div>
                   </div>
                   </div>
                   </div> */}
                   
                   <div style={{width:"100%", height:"600px", backgroundColor:"#222222"}}>
                  <div className="container" style={{height:"100%"}}>
                      <img src="containerpic.jpg" style={{height:"70%", width:"100%"}}   />
                      <div style={{height:"20px"}}></div>
                      <h3 style={{color:"white"}}>Time to experience virtual travel to Mars from your home</h3>
                      <div style={{height:"20px"}}></div>
                      <h6 style={{color:"white"}}>Thanks to virtual reality technology, you do not have to buy a $500,000 ticket for a trip to Mars. A virtual trip to Mars from the comfort of your home is now possible. Now you have another fantastic option to watch at home: Mars, the red planet, which is some 80 million kilometers from Earth.</h6>
                  </div>
                  </div>
                   
                  <div style={{backgroundColor:"#222222", height:"100px"}}>
                  <State/>
                  </div>
                </>


        );
    }
}
 
export default homepage;