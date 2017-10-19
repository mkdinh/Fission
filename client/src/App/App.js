// Import React dependencies
//--------------------------------------------------------
import React, { Component } from "react";
import "./App.css";
import { Navbar } from '../components/Nav/';
import { About, Build } from '../components/Page';
import Auth0 from "../components/Auth/Auth.js"
import { BrowserRouter as Router, Route } from "react-router-dom";

// Create App component
//--------------------------------------------------------

class App extends Component {
	render(){
		return(

			<div>
				<Navbar/>
				<Router>
					<div>
						<Route exact path="/" component={About}/>
						<Route exact path="/build" component={Build}/>
					</div>
				</Router>
			</div>
		)
	}
};

export { App };
