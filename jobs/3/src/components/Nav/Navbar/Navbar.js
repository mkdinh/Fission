// Import React dependencies
//--------------------------------------------------------
import React, { Component } from 'react';
import './Navbar.css';
import { NavWrapper } from '../NavWrapper';
import { NavLink } from '../NavLink';


// Create new stateful component
//--------------------------------------------------------
class Navbar extends Component{
    
	state = {

	}

	render(){
		return(

			<nav>

 				<div className="nav-wrapper">
					<a href="#" className="brand-logo">Logo</a>
 					<ul id="nav-mobile" className="right hide-on-med-and-down">
						<li>
							<a href="sass.html">Sass</a>
						</li>
 						<li>
							<a href="badges.html">Components</a>
						</li>
 						<li>
							<a href="collapsible.html">JavaScript</a>
						</li>
					</ul>
				</div>

			</nav>
		)
	}
};


// Export component to application
//--------------------------------------------------------
export { Navbar };

