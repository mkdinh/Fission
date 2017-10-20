import React, { Component } from 'react';
import Container from "reactstrap/lib/Container";
//import Grid from "reactstrap/lib/Grid";
import Col from "reactstrap/lib/Col";
import Row from "reactstrap/lib/Row";
//import NavbarBrandNew from "../components/Navbar";
//import Sidebarmenunew from "../../components/Sidebarmenunew";
import Newcompomenu from "../../components/Newcompomenu";
import FissionButton from "../../components/FissionButton";
import Previewdisplay from "../../components/Displaycode";
import Listcompo from "../../components/Listcompo";
import CodeEditor from "../../components/Editor";
class Canvaspage extends Component {


  render(){

    return(
    <div>     
    
    <Container>
          <p>
 Your canvas page, a space to preview and style your final selected components before creating a "fission" of your work
          </p>
          
           <Row> 
          <Col xs="4">
         <Newcompomenu />
          </Col>
    
      <Col xs ="4">
          <Listcompo />
            </Col>

  <Col xs="4">
     <Previewdisplay />
            </Col>
        </Row>
        <FissionButton />
    
    </Container>
  </div>
  );
}
}

export default Canvaspage;