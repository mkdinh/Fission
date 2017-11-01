// Import React dependencies
//--------------------------------------------------------
import React, { Component } from 'react';
import './SubmitButton.css';


// Create new stateful component
//--------------------------------------------------------
class SubmitButton extends Component{
    
	state = {

	}

	render(){
		return(

			<button>

				{this.props.children}

			</button>
		)
	}
};


// Export component to application
//--------------------------------------------------------
export { SubmitButton };

