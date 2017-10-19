// Import React dependencies
//--------------------------------------------------------
import React, { Component } from "react";
import "./App.css";
import { PanelContainer } from '../components/Text/';
import { PanelFooter } from '../components/Text/';


// Create App component
//--------------------------------------------------------

class App extends Component {
	render(){
		return(

			<div>

				<PanelContainer/>
				<PanelHeader component=/>
				<PanelBody component=/>
				<PanelFooter/>

			</div>
		)
	}
};

export { App };
