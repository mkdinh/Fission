// Import React dependencies
//--------------------------------------------------------
import React from 'react';
import './DisabledButton.css';


// Create stateless component
//--------------------------------------------------------
const DisabledButton = (props) =>

	<a className="btn-large disabled" style="[object Object]">

		{props.children}

	</a>

// Export component to application
//--------------------------------------------------------
export { DisabledButton };                                     