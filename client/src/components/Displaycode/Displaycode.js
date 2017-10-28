//display space for the preview of components
//uses react-tabs to create a small component with clickable tabs
import React, { Component } from 'react';
import "./Displaycode.css";
import {Tabs, Tab} from 'material-ui/Tabs';
import CanvasTab from "./Canvas";
import ReactorTab from "./Reactor";

const style= {
  card: {position: "relative", backgroundColor: "white", padding: 0},
  wrapper: {padding: "1rem"},
  tabs: {margin: "1rem"},
  preview: {backgroundColor: "white",  textAlign: "center"},
  reactorComp: {width: "100%", borderBottom: "1px solid lightgrey"},
  actionBtn: {margin: "0.5rem"},
  previewDiv: {width: "100%"},
  editorCard: {position: "relative", margin: "1rem 0", height: "", backgroundColor: "white"},
  editorWrapper: {position: "relative", overflow: "scroll", height: "40vh", backgroundColor: "black"}
}

class Previewdisplay extends Component{

  state = {
    html: ""
  }


  strToDOM = (str) => {return {__html: str}};
  
  render(){
    return(
      <div style={style.wrapper}>
        <Tabs>
          <Tab label="Preview" onActive={() => this.props.updateTab("canvas")}>
            <CanvasTab
              active={this.props.active}
              editor={this.props.editor}
              toggleSidebar={this.props.toggleSidebar}
              toggleEditor={this.props.toggleEditor}
              updateTab={this.props.updateTab}
              tab={this.props.tab}
              updateDOM={this.state.updateDOM}
              strToDOM={this.strToDOM}/>
          </Tab>

          <Tab label="Reactor" onActive={() => this.props.updateTab("reactor")}>
            <ReactorTab
              updateDOM={this.state.updateDOM}
              strToDOM={this.strToDOM}
              reactor={this.props.reactor}
              handlePreview={this.props.handlePreview}
              preview={this.props.preview}/>
          </Tab>

        </Tabs>
    </div>
    )
  }
}

export default Previewdisplay;


