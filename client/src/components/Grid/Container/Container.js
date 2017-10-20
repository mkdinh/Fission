// Import React dependencies
//--------------------------------------------------------
import React, { Component } from 'react';
import './Container.css';
import { Row, Col } from '../../Grid';


// Create new stateful component
//--------------------------------------------------------
class Container extends Component{
    
	state = {

	}

	render(){
	return(
		<div className={`container ${props.fluid? fluid: ""}`}>

		</div>
	)}
};


// Export component to application
//--------------------------------------------------------
export { Container };

