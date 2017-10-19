// Import React dependencies
//--------------------------------------------------------
import React from 'react';
import './TabItem.css';


// Create stateless component
//--------------------------------------------------------
const TabItem = (props) =>

	<li className="tab col s3">

		{props.children}

	</li>

// Export component to application
//--------------------------------------------------------
export { TabItem };                                     