import React, { Component } from "react";
import "./landingpage.css";
import img from "../../../src";

class Landing extends Component{
  state = {
    
  }

  render(){
    return(
        <div style={{
          backgroundImage: "url('https://c1.staticflickr.com/1/71/162840472_4380d98356_b.jpg')", 

          backgroundPosition: 'center center', 
          backgroundRepeat:"no-repeat", 
          backgroundSize:"cover" , 
          minWidth: "1024px",
          position: "fixed", 
          minHeight: "100%",
          height: "auto",
          width: "100%",
          left: "0", 
          right: "0",


            }}>

       <div id="titleBox">
           FISSION


        <div id="tagLine">
        React Components, FAST 
                    
        </div>
        </div>

        <div id="logoBox"><a href="#"><img src={"githublogo.svg"} alt="github logo" className="img-responsive"/></a></div>


    

 

  
  </div>

          
    );

  }
}

export default Landing;