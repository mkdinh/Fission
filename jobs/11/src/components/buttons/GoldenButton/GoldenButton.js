// Import React dependencies
//--------------------------------------------------------
import React from 'react';
import './GoldenButton.css';


// Create stateless component
//--------------------------------------------------------
const GoldenButton = (props) =>

	<button className="btn waves-effect waves-light" type="submit" style="[object Object]">

		{props.children}

	</button>

// Export component to application
//--------------------------------------------------------
export { GoldenButton };                                     