import React from "react";
class card extends React.Component {
    state = {  } 
    render() { 
        return (

<div class="card" style={{width:"100%"}}>
  <img class="card-img-top" src="logo192.png" alt="Card image cap"/>
  <div class="card-body">
      
    <h5 class="card-title">Register Now for VR Tour</h5>
    <p class="card-text">Register now in any of our favourite space exploration industry to explore the MARS in Virtual Reality.</p>
    <p class="card-text">Select your Gender, Additonal Features you want then upload your picture.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">1- NASA</li>
    <li class="list-group-item">2- SpaceX</li>
    <li class="list-group-item">3- ESA</li>
  </ul>
  
</div>

        );
    }
}
 
export default card;