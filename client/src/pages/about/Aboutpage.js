import React, { Component } from "react";
//import "../../../Footer/Footer.css";
import "./aboutpage.css";
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
          minWidth: "1024px",
          position: "fixed", 
          minHeight: "100%",
          height: "auto",
          width: "100%",
          left: "0", 
          right: "0",


            }}>

       <div className="infobox" 
       style={{ 
      fontFamily: "Permanent Marker",
       color: 'white', 
       width: 'auto', 
       border: '#595959 1px solid',
       padding: "10px",
       margin: "40px",
       backgroundColor: "#303030",
       height: "auto",
       opacity: ".95",
       
     }}>
      <div className="aboutTitle">
       FISSION
       <br />
      Fast, Easy, Complete
      </div>
        <div style={{color: 'white', fontFamily: "Oswald", fontSize: "25px"}}>

      Welcome to Fission, 
      <br />
      This application will help you generate React components based on old-fashioned html markup. 
      Begin on the Canvas page by inserting any html component you like.  When you finish, save your components and click "Fuse".
      Fission will create a React component file to hold your markup. 
      Currently, you can add inline styling as tag properties when compiling your work. 
      Nesting html is supported, but please be aware that it is still a prototype, so there may be some errors 
      when generating components with nesting components.  
      <br />
      These formatting options are supported:</div>
      <ul className="infolist" style={{
        textAlign: 'left',
        marginLeft: '250px'
      }}>
        <li>Name (your file's name)</li>
        <li>Component (stateful || stateless)</li>
        <li>Group (group your component into its own folder)</li>
        <li>Style (any css markup for the component)</li>
        <li>Expand (shallow || deep)</li>
      </ul>  

<div className="Footer" style={{
    height: "80%",
    paddingTop: "5px",
    fontSize: "25px",
   backgroundColor: "transparent",
   backgroundPosition: "bottom"

}}>
 
   Made by <a href="https://github.com/mkdinh/PCR" id ="teamName">Team Chain-React.ion</a>

</div>





    </div>
     {/*<Footer />*/ }
    




      </div>
          
    );

  }
}

export default About;
