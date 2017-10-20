// Import React dependencies
//--------------------------------------------------------
import React, { Component } from 'react';
import './Build.css';
import { Wrapper } from '../../Card';
import Auth0 from "../../Auth/Auth.js";
import NewUserModal from "../../Auth/NewUser.js";

// Create new stateful component
//--------------------------------------------------------
class Build extends Component{
    
	state = {
		newUser: false,
		auth0Id: ""
	}

	componentDidMount(){
		Auth0.handleAuthentication( 
			(user) => {
				console.log(user)
			}, 

			(auth0Id) => {
				this.setState({newUser: true, auth0Id: auth0Id})
			})
	}

	toggleNewUserModal = () => {
		// open or close modal w/ one command
		this.setState({newUser: !this.state.newUser});
	}

	render(){
		return(

			<div>
				{this.state.newUser ?
					<NewUserModal auth0Id={this.state.auth0Id} open={this.state.newUser}/>
				:
					""
				}
 				<div className="card blue-grey darken-1">
					<div className="card-content white-text">
						<span className="card-title">Card Title</span>
 						<p>I am a very simple card. I am good at containing small bits of information.I am convenient because I require little markup to use effectively.</p>
					</div>
 					<div className="card-action">
						<a href="#">This is a link</a>
 						<a href="#">This is a link</a>
					</div>
				</div>

			</div>
		)
	}
};


// Export component to application
//--------------------------------------------------------
export { Build };

