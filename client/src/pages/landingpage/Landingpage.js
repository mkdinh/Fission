import React, { Component } from "react";
import Tabbar from "./components/Tabbar";
import "./landingpage.css";
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

       <div className="titleBox">
           FISSION
           </div>

      <div className ="tagBox">
      Making Your Components, Easier
      </div>







    </div>



      </div>
          
    );

  }
}

export default Landing;