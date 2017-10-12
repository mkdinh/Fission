// Import React dependencies
//--------------------------------------------------------
import React, { Component } from 'react';
import './App.css';
import { Nav } from '../components/Nav';
import { Container } from '../components/Grid/';


// Create App component
//--------------------------------------------------------

class App extends Component {
	render(){
		return(

			<div>
				<Nav />
				<Container fluid="fluid"/>
			</div>
		)
	}
};

export { App };
