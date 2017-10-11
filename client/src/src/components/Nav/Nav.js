// Import React dependencies
//--------------------------------------------------------
import React, {Component} from 'react';
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

			<nav className=''>
				<img src='logo.png'/>

					<NavList>
 						<NavLink>
							<a href='#'>Sass</a>
  						</NavLink>
						<NavLink>
							<a href='#'>Sass</a>
  						</NavLink>
						<NavLink>
							<a href='#'>Sass</a>
  						</NavLink>
 					</NavList>

			</nav>
		)
	}
};


// Export component to application
//--------------------------------------------------------
export {Nav};

