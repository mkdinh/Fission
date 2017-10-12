// Import React dependencies
//--------------------------------------------------------
import React, { Component } from 'react';
import './NavList.css';
import { NavLink } from '../NavLink';


// Create new stateful component
//--------------------------------------------------------
class NavList extends Component{
    
	state = {

	}

	render(){
		return(

			<ul className="right hide-on-med-and-down">
				
				{this.props.children}

			</ul>
		)
	}
};


// Export component to application
//--------------------------------------------------------
export {NavList};

