// Import React dependencies
//--------------------------------------------------------
import React, { Component } from 'react';
import './Feedback.css';


// Create new stateful component
//--------------------------------------------------------
class Feedback extends Component{
    
	state = {

	}

	render(){
		return(

			<div>

 				<div className="row">
					<div className="input-field col s6">
						<input placeholder="Placeholder" id="first_name" type="text" className="validate"></input>
 						<label for="first_name">First Name</label>
					</div>
 					<div className="input-field col s6">
						<input id="last_name" type="text" className="validate"></input>
 						<label for="last_name">Last Name</label>
					</div>
				</div>
 				<div className="row">
					<div className="input-field col s12">
						<textarea id="textarea1" className="materialize-textarea"></textarea>
 						<label for="textarea1">Textarea</label>
					</div>
				</div>

			</div>
		)
	}
};


// Export component to application
//--------------------------------------------------------
export { Feedback };

