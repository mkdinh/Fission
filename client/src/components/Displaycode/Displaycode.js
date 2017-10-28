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
import FissionBtn from "../../components/FissionButton";

const style= {
  card: {position: "relative", backgroundColor: "white", padding: 0},
  wrapper: {padding: "1rem"},
  tabs: {margin: "1rem"},
  preview: {backgroundColor: "white",  textAlign: "center"},
  reactorComp: {width: "100%", borderBottom: "1px solid lightgrey"}
}

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
      <div style={style.wrapper}>
        <Tabs>
          <Tab label="Preview" onActive={() => this.props.updateTab("canvas")}>
            <div className="valign-wrapper" style={{...style.preview, height: this.props.editor ? "25vh" : "67.3vh"}}>
              <div className="editor-switch">
                <FloatingActionButton mini={true} onClick={this.props.toggleEditor} style={{margin: "0.5rem"}}>
                  <span>Editor</span>
                </FloatingActionButton>

                <FloatingActionButton mini={true} onClick={this.props.toggleSidebar} style={{margin: "0.5rem"}}>
                <span>Style</span>
                </FloatingActionButton>       
              </div>
            
              {this.state.html? 
                <div style={{width: "100%"}} dangerouslySetInnerHTML={this.strToDOM(this.state.html)}/> 
              : ""}
            </div>

            {this.props.editor ?
              <Card style={{position: "relative", margin: "1rem 0", height: "", backgroundColor: "white"}}>
                  <div style={{position: "relative", overflow: "scroll", height: "40vh", backgroundColor: "black"}}>
                    <CodeEditor
                      updateDOM={this.updateDOM}
                      code={this.state.html}/>

                  </div>

              </Card>
            : ""}
            
            <Card style={{margin: "1rem 0"}}>
              <div className="row preview-footer">
                      <Col size={4}>
                        <input id="component_name" value={this.props.active.name} placeholder="Component Name"/>
                      </Col>
                      <Col size={2}>
                        <input value={this.props.active.group} placeholder="Group Name"/>
                      </Col>
                      <Col size={3}>
                        <div style={{margin: "0.5rem 0"}}>
                          <p style={{margin: "0rem", fontSize: "0.75rem"}}>State</p>
                
                          <div className="switch">
                            <label>
                              Dumb
                              <input type="checkbox"/>
                              <span className="lever"></span>
                              Smart
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

          </Tab>
          <Tab label="Reactor" onActive={() => this.props.updateTab("reactor")}>
              <div style={{position: "relative", marginTop: "1rem"}}>
                <Col size={6} style={{...style.card, width: "49%", height: "50vh", marginRight: "1%", overflow:"scroll"}}>
                  {
                    this.props.reactor.map(component => 
                    <div 
                      key={component._id} 
                      onMouseOver={() => this.props.handlePreview(component)} 
                      className="reactor-component-list-item">
                      {component.name}
                    </div>)
                  }
                </Col>

                <Col size={6} style={{width: "49%", marginLeft: '1%', padding: 0 }}>
                    <div className="valign-wrapper" style={{...style.card, height: "35vh", width: "100%"}}>
                      {
                        this.props.preview? 
                        <div
                          style={{width: "100%",textAlign: "center"}} 
                          dangerouslySetInnerHTML={this.strToDOM(this.props.preview.html)}/> 
                        : ""
                      }
                    </div>

                    <div className="valign-wrapper" style={{...style.card, height: "12.75vh", width: "100%", marginTop: "1rem"}}>

                      {
                        this.props.preview ? 
                        <div style={{margin: "1rem"}}>
                          <p><b>Name:</b> {this.props.preview.name}</p>
                          <p><b>Group:</b> {this.props.preview.group}</p>
                        </div>
                        : ""
                      }
                  
                    </div>
                </Col>
              </div>
              
              <FissionBtn style={{marginTop: "1rem"}}/>
              

          </Tab>
        </Tabs>
    </div>
    )
  }
}

export default Previewdisplay;


