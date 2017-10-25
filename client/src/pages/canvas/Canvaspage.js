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

import API from "../../utils/api"

class Canvas extends Component {

    state = {
      components: {}
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


  onDrop = (data) => {
    console.log(data)
  }


handleClick=(newCompo)=>{
  console.log(newCompo);
  this.setState({active: newCompo});
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
              <Newcompomenu/>
            </div>
        
            <div className="col-md-2">
              <Listcompo components={this.state.components}/>       
              <Previewdisplay />
               <Droppable types={["usercompo"]} onDrop={this.onDrop.bind(this)}>
              <CodeEditor />
              </Droppable>
            </div>
          </div>

      </Container>
  )};
}

export default Canvas;