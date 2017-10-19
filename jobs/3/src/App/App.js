// Import React dependencies
//--------------------------------------------------------
import React, { Component } from "react";
import "./App.css";
import { Navbar } from '../components/Nav/';
import { TabWrapper } from '../components/Tab/';


// Create App component
//--------------------------------------------------------

class App extends Component {
	render(){
		return(

			<div>

				<Navbar/>
				<TabWrapper/>

			</div>
		)
	}
};

export { App };
