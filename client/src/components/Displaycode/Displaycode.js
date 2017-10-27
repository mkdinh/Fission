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

  strToDOM = (str) => {return {__html: str}};
  
  render(){
    return(
      <Card style={{margin: "1rem", height: "76vh", backgroundColor: "white"}}>
        <Tabs>

          <Tab label="Preview">
            {this.props.active.html? <div dangerouslySetInnerHTML={this.strToDOM(this.props.active.html)}/> : ""}
          </Tab>

          <Tab label="HTML">
            <div style={{height: "69vh", backgroundColor: "white"}}>
            
              {this.props.active.html ? <CodeEditor code={this.props.active.html}/> : ""}
            </div>
          </Tab>

          <Tab label="CSS">
            <div style={{height: "69vh", backgroundColor: "white"}}>
      
            </div>
          </Tab>

        </Tabs>
      </Card>
    )
  }
}

export default Previewdisplay;


