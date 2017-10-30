// Import React dependencies
//--------------------------------------------------------
import React from 'react';
import './FlatButton.css';


// Create stateless component
//--------------------------------------------------------
const FlatButton = (props) =>

	<a className="waves-effect waves-teal btn-flat">

		{props.children}

	</a>

// Export component to application
//--------------------------------------------------------
export { FlatButton };                                     