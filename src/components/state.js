import React from "react";
class state extends React.Component {
    
    constructor(){
        super()
        this.state={ message:"Subscribe now so you will never miss an update" }
    
    this.changeMessage=this.changeMessage.bind(this) 
} 
    changeMessage(){
        this.setState({
            message:"Thank You for Subscribing"
        })
    }
    render() { 
        return (
            <>
            <h6 style={{color:"white"}}>{this.state.message}</h6>
             {/* <button  onClick={() => this.changeMessage()}>Subscribe</button>  event handler using arrow function good for parameters, not good for nested code */}
             <button  onClick={this.changeMessage} style={{backgroundColor:"white", height:"50px"}}>Subscribe</button>  {/*event handler using constructor bind method best approach*/}
            
            </>
        );
    }
}
 
export default state;