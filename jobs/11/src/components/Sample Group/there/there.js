// Import React dependencies
//--------------------------------------------------------
import React from 'react';
import './there.css';


// Create stateless component
//--------------------------------------------------------
const there = (props) =>

	<a className="waves-effect waves-teal btn-flat" style="[object Object]">

		{props.children}

	</a>

// Export component to application
//--------------------------------------------------------
export { there };                                     