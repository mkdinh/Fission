// Import React dependencies
//--------------------------------------------------------
import React from 'react';
import './Container.css';


// Create new stateful component
//--------------------------------------------------------
const Container  = (props) => 

	<div className={`container`} style={props.style}>
		{props.children}
	</div>


// Export component to application
//--------------------------------------------------------
export { Container };

