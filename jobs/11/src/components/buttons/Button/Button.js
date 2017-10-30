// Import React dependencies
//--------------------------------------------------------
import React from 'react';
import './Button.css';


// Create stateless component
//--------------------------------------------------------
const Button = (props) =>

	<a className="waves-effect waves-teal btn-flat" style="[object Object]">

		{props.children}

	</a>

// Export component to application
//--------------------------------------------------------
export { Button };                                     