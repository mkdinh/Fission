import React, { Component } from 'react';
//import NavbarBrandNew from "../components/navbar";
import Sidebarmenunew from "../../components/Sidebarmenunew";
 import Newcompomenu from "../../components/Newcompomenu";
import FissionButton from "../../components/FissionButton";
//set up the Drag and Drop tool
import ReactDOM from 'react-dom';
//import Draggable from 'react-draggable'; // The default
import RaisedButton from "material-ui/RaisedButton";
import "./Reactorpage.css";
import { Container, Row, Col } from "../../components/Grid"
import { Preview, ComponentList, Compiler } from "../../components/ReactorComponents";

class  Reactor  extends Component {
  //set the state of the page to be what the component is in this case (can do later)
  state = {

  }

  render(){
  return(
    <Container>
      <Row>
          <Col size={4}>
            <Row>
              <ComponentList/>
            </Row>

            <Row>
              <Preview/>
            </Row>
          </Col>

          <Col size={8}>
            <Row>
              <Compiler/>
            </Row>
          </Col>
      </Row>
      <Row>
        <FissionButton />
      </Row>
    </Container>
  )}
}

export default Reactor;
