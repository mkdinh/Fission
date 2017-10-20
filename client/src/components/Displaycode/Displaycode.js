//display space for the preview of components
//uses react-tabs to create a small component with clickable tabs
import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "./Displaycode.css";

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


