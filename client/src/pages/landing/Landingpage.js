import React, { Component } from "react";
import "./landingpage.css";
import img from "../../../src";
import Fa from "react-fontawesome";

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
        <div id="logoBox">
          <a href="https://github.com/mkdinh/PCR">
            <Fa className="github" name="github-alt"/>
          </a>
          {/* <img src={"githublogo2.svg"} alt="github logo" className="logo"/></a> */}
        </div>

  
  </div>

          
    );

  }
}

export default Landing;