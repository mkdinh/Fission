// Import React dependencies
//--------------------------------------------------------
import React, { Component } from 'react';
import './Team.css';


// Create new stateful component
//--------------------------------------------------------
class Team extends Component{
    
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
export { Team };

