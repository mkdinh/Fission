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
          backgroundSize:"cover" , width: "1000px"  }}>

      <h1>FISSION</h1>
      <h2>Making Your Components, Easier</h2>
       <div className="infobox" 
       style={{ 
       color: 'white', 
       height: '300px', 
       margin: '10px', 
       padding: '5px',
       border: 'white 5px solid'}}>
        <p>Welcome to Fission! This application will generate react component based on old-fashion html markups. Insert any html component you like and it will return a React component file and its css file.</p>
      <p>On the Build page insert your html markups. Currently you can give compiling configuration inline style as tag properties. These options are supported:</p>
      <ul className="infolist">
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
