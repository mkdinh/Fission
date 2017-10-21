import React, { Component } from 'react';
import Container from "reactstrap/lib/Container";
import Newcompomenu from "../../components/Newcompomenu";
import FissionButton from "../../components/FissionButton";
import Previewdisplay from "../../components/Displaycode";
import Listcompo from "../../components/Listcompo";
import CodeEditor from "../../components/Editor";

import ReactDOM from 'react-dom';
import { Draggable, Droppable } from 'react-drag-and-drop';
import RaisedButton from "material-ui/RaisedButton";

class Canvas extends Component {

    state = {

    }

  showData = () => {
      this.setState({
        
      })
  }


  onDrop = (data) => {
    console.log(data)
  }

  render(){
  return(

      <Container>

          <p>
            This is your Reactor, a space to preview and style your final 
 selected components before saving a "Fission file" 
 of your work with the Fission Button Below.
          </p>
              
          <div className ="row"> 
            <div className="col-md-2">
              <Newcompomenu />
            </div>
        
            <div className="col-md-2">
              <Listcompo />       
              <Previewdisplay />
              <CodeEditor />
            </div>
          </div>

      </Container>
  )};
}

export default Canvas;