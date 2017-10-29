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
          <Tab label="Generator" onActive={() => this.props.updateTab("canvas")}>
            <CanvasTab
              profile={this.props.profile}
              active={this.props.active}
              editor={this.props.editor}
              toggleSidebar={this.props.toggleSidebar}
              toggleEditor={this.props.toggleEditor}
              updateTab={this.props.updateTab}
              canvasMode={this.props.canvasMode}
              tab={this.props.tab}
              addSnackbar={this.props.addSnackbar}
              updateCustoms={this.props.updateCustoms}
              updateDOM={this.state.updateDOM}
              strToDOM={this.strToDOM}/>
          </Tab>

          <Tab label="Reactor" onActive={() => this.props.updateTab("reactor")}>
            <ReactorTab
              activeProject={this.props.activeProject}
              removeFromProject={this.props.removeFromProject}
              profile={this.props.profile}
              updateDOM={this.state.updateDOM}
              updateProjects={this.props.updateProjects}
              strToDOM={this.strToDOM}
              reactor={this.props.reactor}
              addSnackbar={this.props.addSnackbar}
              addComponent={this.props.addComponent}
              preview={this.props.preview}/>
          </Tab>

        </Tabs>
    </div>
    )
  }
}

export default Previewdisplay;


