//display space for the preview of components
//uses react-tabs to create a small component with clickable tabs
import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { Draggable, Droppable } from 'react-drag-and-drop';
import Listcompo from "../../components/Listcompo";
import CodeEditor from "../../components/Editor";
//import ListBody from "../../components/Body";
import group from "../../group.json";
//import Canvas from "../Canvaspage";
import "./Displaycode.css";


class Previewdisplay extends Component{

  state = {
    html: ""
  }

  componentWillReceiveProps(props){
    this.setState({html: props.active.html})
  }

  updateDOM = (html) =>  this.setState({html: html})

  strToDOM = (str) => {return {__html: str}};
  
  render(){
    return(
      <Card style={{margin: "1rem", height: "76vh", backgroundColor: "white"}}>
        <Tabs>

          <Tab label="Preview">
            <div className="valign-wrapper" style={{height:"70vh", textAlign: "center"}}>
              {this.state.html? 
                <div style={{width: "100%"}}
                    dangerouslySetInnerHTML={this.strToDOM(this.state.html)}/> 
              : ""}
            </div>
          </Tab>

          <Tab label="Markup">
            <div style={{position: "relative", overflow: "scroll", height: "70vh", backgroundColor: "black"}}>
            
              <CodeEditor
                updateDOM={this.updateDOM}
                code={this.state.html}/>

            </div>
          </Tab>

        </Tabs>
      </Card>
    )
  }
}

export default Previewdisplay;


