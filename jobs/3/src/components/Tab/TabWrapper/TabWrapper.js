// Import React dependencies
//--------------------------------------------------------
import React, { Component } from 'react';
import './TabWrapper.css';


// Create new stateful component
//--------------------------------------------------------
class TabWrapper extends Component{
    
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
export { TabWrapper };

