import React from "react";
class footer extends React.Component {
    state = {  } 
    render() { 
        return (
           <>
         
          <div style={{height:"1px"}}>

          </div>
            
           <footer style={{height:"200px", width:"auto", backgroundColor:"#222222", borderTopColor:"white"}}>
           
           <div style={{height:"50px", backgroundColor:"#222222"}}> </div>
    
<div>
    <ul class="nav justify-content-center">
<li className="nav-item"> <a class="nav-link text-white active" href="#">About Us</a> </li>
<li className="nav-item"> <a class="nav-link text-white active" href="#">Terms &amp; Conditions Of Use</a> </li>
<li className="nav-item"> <a class="nav-link text-white active" href="#">FAQs</a> </li>
<li className="nav-item"> <a class="nav-link text-white active" href="#">Support</a> </li>
</ul>

<div style={{height:"30px"}}></div>
<p className="copyright-text" style={{color:"grey"}}>Copyright © 2022 <a href="#">Experience Mars in VR</a>. All Rights Reserved.</p>

    </div> 

            </footer>
           
            </>
        );
    }
}
 
export default footer;