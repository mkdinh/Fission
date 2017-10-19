// Import React dependencies
//--------------------------------------------------------
import React, { Component } from 'react';
import './Navbar.css';
import { NavWrapper } from '../NavWrapper';
import { NavLink } from '../NavLink';
import axios from "axios";
import auth0 from "../../Auth/Auth.js";
const auth = new auth0();

const login = (ev) => {
	ev.preventDefault()
	auth.login()
}

const server = (ev) => {
	ev.preventDefault();

	axios.get("./api/user/")
		.then(res => console.log(res))
		.catch(err => console.log(err))

}

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
							<a onClick={login}>Login</a>
						</li>
 						<li>
							<a onClick={server}>Login Server</a>
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

