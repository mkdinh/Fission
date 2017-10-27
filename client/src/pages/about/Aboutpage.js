import React, { Component } from "react";
import Backgroundimage from "../../components/backgroundimage";
import Footer from "../../components/Footer";

class About extends Component{
  state = {
    
  }

  render(){
    return(
        <div style={{
          backgroundImage: "url('https://www.nzgeo.com/wp-content/uploads/2015/08/74_Vuewpoint-1300x826.jpg')", 
          backgroundPosition: 'center center', 
          backgroundRepeat:"no-repeat", 
          backgroundSize:"cover" , 
          width: "auto",
          height: "auto",
          position: "absolute",
          left: "0",
          right: "0"
            }}>

      
       <div className="infobox" 
       style={{ 
        fontFamily: "Permanent Marker",
        top: "50px",
        width: "auto",
        border: "#595959 5px solid",
       color: 'white', 
       margin: '150px', 
       padding: '10px',
       backgroundColor: "gray",
       opacity: ".8"
     }}>
     <h1>FISSION</h1>
      <h2>Making Your Components, Easier</h2>
        <p>Welcome to Fission! This application will generate react component based on old-fashion html markups. Insert any html component you like and it will return a React component file and its css file.</p>
      <p style={{
    color: "white !important"

      }}>On the Build page insert your html markups. Currently you can give compiling configuration inline style as tag properties. These options are supported:</p>
      <ul className="infolist" style ={{
        textAlign: "left",
        marginLeft: "250px"
      }}>
        <li>name (file name)</li>
        <li>component (stateful || stateless)</li>
        <li>group (group component into its own folder)</li>
        <li>style (any css markup)</li>
        <li>expand (shallow || deep)</li>
      </ul>
      <p>Nesting html is supported but this is still a prototype there might be some errors when generating components nesting component</p>
    </div>
     <Footer />   
    
      </div>
          
    );

  }
}

export default About;
