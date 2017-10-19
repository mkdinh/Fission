// Import React dependencies
//--------------------------------------------------------
import React, { Component } from 'react';
import './NavLink.css';


// Create new stateful component
//--------------------------------------------------------
class NavLink extends Component{
    
	state = {

	}

	render(){
		return(

			<ul>

				{this.props.children}

			</ul>
		)
	}
};


// Export component to application
//--------------------------------------------------------
export { NavLink };

