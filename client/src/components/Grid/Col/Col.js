// Import React dependencies
//--------------------------------------------------------
import React from 'react';
import './Col.css';


// Create stateless component
//--------------------------------------------------------
const Col = (props) =>

	<div className={`col s${props.size || 12} ${props.className ? props.className : ""}`}
		style={props.style}>

		{props.children}

	</div>

// Export component to application
//--------------------------------------------------------
export { Col };                                     