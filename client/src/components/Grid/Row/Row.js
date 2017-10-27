// Import React dependencies
//--------------------------------------------------------
import React from 'react';
import './Row.css';

// Create stateless component
//--------------------------------------------------------
const Row = (props) =>

	<div className={`row ${props.className ? props.classname : ""}`} style={props.style}>
		{props.children}
	</div>

// Export component to application
//--------------------------------------------------------
export { Row };                                     