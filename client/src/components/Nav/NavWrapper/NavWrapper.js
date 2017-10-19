// Import React dependencies
//--------------------------------------------------------
import React, { Component } from 'react';
import './NavWrapper.css';


// Create new stateful component
//--------------------------------------------------------
class NavWrapper extends Component{
    
	state = {

	}

	render(){
		return(

			<div>

				{this.props.children}

			</div>
		)
	}
};


// Export component to application
//--------------------------------------------------------
export { NavWrapper };

