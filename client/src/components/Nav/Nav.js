// Import React dependencies
//--------------------------------------------------------
import React, { Component } from 'react';
import './Nav.css';
import { NavList } from '../NavList';
import { NavLink } from '../NavLink';


// Create new stateful component
//--------------------------------------------------------
class Nav extends Component{
    
	state = {

	}

	render(){
		return(

			<nav className="navbar">
				Fission

					<NavList >
 						<NavLink >
							<a href='#'>Home</a>
  						</NavLink>
						<NavLink >
							<a href='#'>Build</a>
  						</NavLink>
						<NavLink >
							<a href='#'>About</a>
  						</NavLink>
 					</NavList>

			</nav>
		)
	}
};


// Export component to application
//--------------------------------------------------------
export {Nav};

