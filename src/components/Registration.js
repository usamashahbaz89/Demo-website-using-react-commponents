import React from "react";
import {Routes, Route} from 'react-router-dom';
 import Signup from './Signup';
import Card from "./card";

class Registration extends React.Component {
    state = {  } 
    render() { 
        return (
           <>
           <div class="container-fluid" style={{height:"650px", width:"auto"}}>
            <div class="row">
               <div className="col-sm-3" style={{height:"650px", backgroundColor:"#222222"}}>
                  <Card/>
               </div>
               <div className="col-sm-9"  style={{height:"650px"}}>
               <Signup/>
               </div>
               </div>
               </div>
               </>

        );
    }
}
 
export default Registration;