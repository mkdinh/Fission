// Import React dependencies
//--------------------------------------------------------
import React, {Component} from 'react';
import './Container.css';
import { Row } from '../Row';
import { Row } from '../Row';


// Create new stateful component
//--------------------------------------------------------
class Container extends Component{
    
	state = {

	}

	render(){
		return(

			<div className='container'>

				{this.props.children}
		{this.props.children}

			</div>

		)
	}
};


// Export component to application
//--------------------------------------------------------
export {Container};
