// Import React dependencies
//--------------------------------------------------------
import React from 'react';
import './SampleButton.css';


// Create stateless component
//--------------------------------------------------------
const SampleButton = (props) =>

	<a className="btn">

		{props.children}

	</a>

// Export component to application
//--------------------------------------------------------
export { SampleButton };                                     