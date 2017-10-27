//display space for the preview of components
//uses react-tabs to create a small component with clickable tabs
import React, { Component } from 'react';
import { Row, Col } from "../../components/Grid";
import {Tabs, Tab} from 'material-ui/Tabs';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { Draggable, Droppable } from 'react-drag-and-drop';
import Listcompo from "../../components/Listcompo";
import CodeEditor from "../../components/Editor";
import Fa from "react-fontawesome";
import FloatingActionButton from 'material-ui/FloatingActionButton';
//import ListBody from "../../components/Body";
import group from "../../group.json";
//import Canvas from "../Canvaspage";
import "./Displaycode.css";


class Previewdisplay extends Component{

  state = {
    html: "",
    openEditor: true
  }

  componentWillReceiveProps(props){
    this.setState({html: props.active.html})
  }

  toggleEdit = () => this.setState({openEditor: !this.state.openEditor})

  updateDOM = (html) =>  this.setState({html: html})

  strToDOM = (str) => {return {__html: str}};
  
  render(){
    return(
      <div>
      <Card style={{margin: "1rem", height: "", backgroundColor: "white"}}>
        <Tabs>

          <Tab label="Preview">
            <div className="valign-wrapper" style={{height: this.state.openEditor ? "25vh" : "67.3vh", textAlign: "center"}}>
              {this.state.html? 
                <div style={{width: "100%"}}
                    dangerouslySetInnerHTML={this.strToDOM(this.state.html)}/> 
              : ""}
            </div>
            
          </Tab>

          {/* <Tab label="Markup" onClick={()=> alert("hi")}>
            <div style={{position: "relative", overflow: "scroll", height: "35vh", backgroundColor: "black"}}>
            
              <CodeEditor
                updateDOM={this.updateDOM}
                code={this.state.html}/>

            </div>
          </Tab> */}

        </Tabs>
      </Card>
      {this.state.openEditor ?
      <Card style={{position: "relative", margin: "1rem", height: "", backgroundColor: "white"}}>

          <div className="editor-switch">
              <FloatingActionButton mini={true} style={{margin: "0.5rem"}}>
                <span>HTML</span>
              </FloatingActionButton>
              <FloatingActionButton mini={true} style={{margin: "0.5rem"}}>
              <span>CSS</span>
              </FloatingActionButton>
            
          </div>
          <div style={{position: "relative", overflow: "scroll", height: "40vh", backgroundColor: "black"}}>
            <CodeEditor
              updateDOM={this.updateDOM}
              code={this.state.html}/>

          </div>

      </Card>
      : ""}
      <Card style={{margin: "1rem"}}>
        <div className="row preview-footer">
                <Col size={4}>
                  <input id="component_name" value={this.props.active.name} placeholder="Component Name"/>
                </Col>
                <Col size={2}>
                  <input value={this.props.active.group} placeholder="Group Name"/>
                </Col>
                <Col size={3}>
                  <div style={{margin: "0.5rem 0"}}>
                    <p style={{margin: "0rem", fontSize: "0.75rem"}}>Editor</p>
          
                    <div className="switch">
                      <label>
                        Off
                        <input type="checkbox" value={this.state.openEditor ? "checked": ""} onClick={this.toggleEdit}/>
                        <span className="lever"></span>
                        On
                      </label>
                    </div>
                  </div>
                </Col>
                <Col size={3} className="valign-wrapper" style={{height: "100%"}}>
                  <button className='btn-flat waves-effect waves-light' type='submit' name='action'>Save
                    <i className='material-icons right'>send</i>
                  </button>
                </Col>  
        </div>
      </Card>
    </div>
    )
  }
}

export default Previewdisplay;


