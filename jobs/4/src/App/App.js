// Import React dependencies
//--------------------------------------------------------
import React, { Component } from "react";
import "./App.css";
import { Container } from '../components/Grid/';
import { Col } from '../components/Grid/';


// Create App component
//--------------------------------------------------------

class App extends Component {
	render(){
		return(

			<div>

				<Container/>
				<Col/>

			</div>
		)
	}
};

export { App };
