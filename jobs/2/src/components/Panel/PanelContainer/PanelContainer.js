// Import React dependencies
//--------------------------------------------------------
import React, { Component } from 'react';
import './PanelContainer.css';


// Create new stateful component
//--------------------------------------------------------
class PanelContainer extends Component{
    
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
export { PanelContainer };

