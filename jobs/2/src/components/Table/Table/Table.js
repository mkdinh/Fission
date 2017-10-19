// Import React dependencies
//--------------------------------------------------------
import React, { Component } from 'react';
import './Table.css';


// Create new stateful component
//--------------------------------------------------------
class Table extends Component{
    
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
export { Table };

