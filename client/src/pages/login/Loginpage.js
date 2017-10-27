import React,{ Component } from "react";
import Backgroundimage from "../../components/backgroundimage";
//import modal from ""../../components/modal;

class About extends Component{
  state = {

  }

  render(){
  return(
      
    <div>
      <Backgroundimage src={"https://static.skillshare.com/uploads/project/553fecf24f7dccf3168d92d7eca7d200/094d94fa"} />
      <h1>Fission</h1>
      <h2>Making Your Components, Easier</h2>     
        <p>
          Log-In here to gain access to your workspace.
        </p>
    </div>
  )}
}

export default About;
