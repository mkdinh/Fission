// Import React dependencies
//--------------------------------------------------------
import React, { Component } from 'react';
import './Build.css';
import { Wrapper } from '../../Card';

// Create new stateful component
//--------------------------------------------------------
class Build extends Component{
    
	state = {

	}

	componentDidMount(){
		
	}

	render(){
		return(

			<div>

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

