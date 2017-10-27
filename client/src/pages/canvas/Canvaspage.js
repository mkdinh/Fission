import React, { Component } from 'react';
import {Container, Row, Col} from "../../components/Grid";
import Newcompomenu from "../../components/Newcompomenu";
import FissionButton from "../../components/FissionButton";
import Previewdisplay from "../../components/Displaycode";
import Listcompo from "../../components/Listcompo";

import ReactDOM from 'react-dom';
import { Draggable, Droppable } from 'react-drag-and-drop';
import RaisedButton from "material-ui/RaisedButton";

import API from "../../utils/api"

class Canvas extends Component {

    state = {
      components: [],
      active: {}
    }

  componentDidMount(){
    API.component.findGroups()
      .then( db => {
        this.setState({components: db.data})
      })
      .catch( err => console.log(err))
  }
  
  showData = () => {
      this.setState({
        
      })
  }




  handleClick = (newCompo) => {
    this.setState({active: newCompo});
  }



  render(){
  return(
  
      <Container style={{
        width: "100%", 
        height: "100%",
        backgroundColor: "#303030",
        border:"red 5px solid"

      }}>
        <p style={{
       fontFamily: "Permanent Marker",
       top: '30px',
       color: 'black', 
       width: 'auto', 
       border: '9px dashed #121112',
       padding: "10px",
       backgroundColor: "#ffc107",
       opacity: ".8"

          }}>
        This is your Canvas, a space to preview and style your final selected components before saving a "Fission file" of your work with the Fission Button on the Final Reactor Page.
          </p>

       {/*<Newcompomenu/>*/}
          <Col size={4}>
            <Listcompo 
              components={this.state.components}
              handleClick={this.handleClick}
              />       
          </Col> 

          <Col size={8}>
              
            <Previewdisplay
              active = {this.state.active}
              />

          </Col>
       
      </Container>

  )};
}

export default Canvas;