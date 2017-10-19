// Import React dependencies
//--------------------------------------------------------
import React from 'react';
import './Content.css';


// Create stateless component
//--------------------------------------------------------
const Content = (props) =>

	<div className="card-content white-text">

		{props.children}

	</div>

// Export component to application
//--------------------------------------------------------
export { Content };                                     