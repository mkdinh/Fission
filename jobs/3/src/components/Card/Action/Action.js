// Import React dependencies
//--------------------------------------------------------
import React from 'react';
import './Action.css';


// Create stateless component
//--------------------------------------------------------
const Action = (props) =>

	<div className="card-action">

		{props.children}

	</div>

// Export component to application
//--------------------------------------------------------
export { Action };                                     