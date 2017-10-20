import React, { Component } from "react";
import Backgroundimage from "../../components/backgroundimage";
//import Footer 

class About extends Component{
  state = {
    
  }

  render(){
    return(
      <div>
        <Backgroundimage src={"https://static.skillshare.com/uploads/project/553fecf24f7dccf3168d92d7eca7d200/094d94fa"} />
          <h1>FISSION</h1>
          <h2>Making Your Components, Easier</h2>
          
              <p>
                ABOUT PAGE WOOOO~
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                aliquet diam tortor, id consequat mauris ullamcorper eu. Orci varius
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Pellentesque et dui id justo finibus sollicitudin at
                et metus. Ut feugiat tellus nec metus commodo, sed suscipit nisi
                gravida. Duis eget vestibulum quam, ut porttitor sem. Donec sagittis
                mi sollicitudin turpis semper, et interdum risus lobortis.
              </p>
              
      </div>
    )}
};

export { About };
