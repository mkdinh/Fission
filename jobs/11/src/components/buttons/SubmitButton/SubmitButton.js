// Import React dependencies
//--------------------------------------------------------
import React from 'react';
import './SubmitButton.css';


// Create stateless component
//--------------------------------------------------------
const SubmitButton = (props) =>

	<button className="btn waves-effect waves-light" type="submit">

		{props.children}

	</button>

// Export component to application
//--------------------------------------------------------
export { SubmitButton };                                     