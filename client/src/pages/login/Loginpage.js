import React,{ Component } from "react";
//import modal from ""../../components/modal;

class Login extends Component{
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
       width: '100%', 
       border: '#595959 1px solid',
       backgroundColor: "#303030",
       height: "auto",
       opacity: ".95",
       padding: "2rem"
       
     }}>
      
      <div style={{color: 'white', fontFamily: "Oswald", fontSize: "40px"}}>

      Thank you for logging-in, 
      <br />

      Return to the Canvas to begin complining components. 
      
      </div>


      </div>
      
    </div>
  );
}

}

export default Login;
