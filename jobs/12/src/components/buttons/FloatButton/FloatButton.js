// Import React dependencies
//--------------------------------------------------------
import React from 'react';
import './FloatButton.css';


// Create stateless component
//--------------------------------------------------------
const FloatButton = (props) =>

	<a className="btn-floating btn-large waves-effect waves-light red" style="[object Object]">

		{props.children}

	</a>

// Export component to application
//--------------------------------------------------------
export { FloatButton };                                     