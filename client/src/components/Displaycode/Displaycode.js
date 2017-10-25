//display space for the preview of components
//uses react-tabs to create a small component with clickable tabs
import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Draggable, Droppable } from 'react-drag-and-drop';
import "./Displaycode.css";

/*

psuedo code:  need to grab the component object from the database and then
parse it out to other spaces;  each of the tabs below need to take a different
key value pair from the compo's props {components.html}{component.css} etc.  and divvy
the, up per tab (so maybe the name/)


*/

class Previewdisplay extends Component{

render(){

	return(
<Tabs className="Tabs">
    <TabList>
      <Tab>HTML</Tab>
      <Tab>CSS</Tab>
      <Tab>Styling Preview</Tab>
    </TabList>
     <TabPanel>
      <h2>Preview Your HTML</h2>
    </TabPanel>
    <TabPanel>
      <h2>Preview Your CSS</h2>
    </TabPanel>
       <TabPanel>
      <h2>Preview Your Styling</h2>
    </TabPanel>
  </Tabs>
	);

	}


}


export default Previewdisplay;


