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
      active: {},
      sidebar: false,
      editor: true
    }

  componentDidMount(){
    API.component.findGroups()
      .then( db => {
        this.setState({components: db.data})
      })
      .catch( err => console.log(err))
  }
  
  toggleSidebar = () => {
    console.log(this.state)
    this.setState({sidebar: !this.state.sidebar})
  };

  toggleEditor = () => this.setState({editor: !this.state.editor})

  handleClick = (newCompo) => {
    this.setState({active: newCompo});
  }

  render(){
  return(

      <Container style={{width: "80%", height: "100%"}}>
        <Newcompomenu sidebar={this.state.sidebar}/>
        <Row>
          <Col size={4}>
            <Listcompo 
              components={this.state.components}
              handleClick={this.handleClick}/>       
          </Col> 

          <Col size={8}>
              
            <Previewdisplay
              active={this.state.active}
              editor={this.state.editor}
              toggleSidebar={this.toggleSidebar}
              toggleEditor={this.toggleEditor}/>

          </Col>
        </Row>
      </Container>
  )};
}

export default Canvas;