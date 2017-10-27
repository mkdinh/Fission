//display space for the preview of components
//uses react-tabs to create a small component with clickable tabs
import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Draggable, Droppable } from 'react-drag-and-drop';
import Listcompo from "../../components/Listcompo";
//import ListBody from "../../components/Body";
import group from "../../group.json";
//import Canvas from "../Canvaspage";
import "./Displaycode.css";

/*

psuedo code:  need to grab the component object from the database and then
parse it out to other spaces;  each of the tabs below need to take a different
key value pair from the compo's props {components.html}{component.css} etc.  and divvy
the, up per tab (so maybe the name/)

<Listcompo components= {this.props.html} />
updateDisplay=(data)=>{
  this.state({components: props.components
  });
}

https://developmentarc.gitbooks.io/react-indepth/content/life_cycle/update/component_will_receive_props.html


const newCompo ={this.state.active};
<p> Name: {this.props.newCompo.name}</p>

*/


class Previewdisplay extends Component{


  clickTime(){

    console.log("This click worked");
  }



render(){
<div>
console.log("this is the this info from displaycode" + this);
</div>

	return(


<Tabs className="Tabs">
    <TabList>
      <Tab className ="Tab">HTML</Tab>
      <Tab className ="Tab">CSS</Tab>
      <Tab className ="Tab">Styling Preview</Tab>
    </TabList>
     <TabPanel>
      <p>Preview Your HTML for your Component</p>
        
            
    </TabPanel>
    <TabPanel>
      <p>Preview Your CSS for your Component</p>
        
    </TabPanel>
       <TabPanel>
      <p>Preview Your Styling for your Component</p>
         
    </TabPanel>
  </Tabs>
	);

	}


}


export default Previewdisplay;


