import React, { Component } from "react";
import Footer from "../../components/Footer";

class About extends Component{
  state = {
    
  }

  render(){
    return(
        <div style={{
          backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/e/ef/Kozloduy_Nuclear_Power_Plant_-_Control_Room_of_Units_1_and_2_in_black_and_white.jpg')", 
          backgroundPosition: 'center center', 
          backgroundRepeat:"no-repeat", 
          backgroundSize:"cover" , 
          width: "auto",
          position: "absolute", 
          height: "auto",
          left: "0", 
          right: "0"

            }}>

       <div className="infobox" 
       style={{ 
      fontFamily: "Permanent Marker",
      top: '35px',
       color: 'white', 
       width: 'auto', 
       border: '#595959 5px solid',
       padding: "15px",
       margin: "120px",
       backgroundColor: "gray",
       height: "auto",
       opacity: ".95",
       
     }}>

       <h1>FISSION</h1>
      <h3>Making Your Components, Easier</h3>

        <p style={{color: 'white'}}>

      Welcome to Fission! This application will generate react components based on old-fashioned html markups. 
      Insert any html component you like and it will create a React component file and its css file on the Build page is insert your html markups. 
      Currently you can give compiling configuration inline style as tag properties. 
      Nesting html is supported but please be aware that it is still a prototype, hence there might be some errors 
      when generating components nesting component.  
      <br />
      These options are supported:</p>
      <ul className="infolist" style={{
        textAlign: 'left',
        marginLeft: '250px'
      }}>
        <li>name (file name)</li>
        <li>component (stateful || stateless)</li>
        <li>group (group component into its own folder)</li>
        <li>style (any css markup)</li>
        <li>expand (shallow || deep)</li>
      </ul>
      <p>Nesting html is supported but this is still a prototype there might be some errors when generating components nesting component</p>
    

<div className="Footer" style={{
    height: "auto",
    borderTop: "1px solid #e0e0e0",
    paddingTop: "10px",
    fontSize: "38px",
   textShadow: "1px 5px 2px rgba(150, 150, 150, 1)",
   backgroundColor: "transparent",
   backgroundPosition: "bottom"

}}>
 
   <h3> Made by <a href="https://github.com/mkdinh/PCR">Team Chain-React.ion</a></h3>

</div>





    </div>
     {/*<Footer />*/ }
    




      </div>
          
    );

  }
}

export default About;
