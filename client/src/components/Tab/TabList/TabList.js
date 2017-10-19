// Import React dependencies
//--------------------------------------------------------
import React from 'react';
import './TabList.css';


// Create stateless component
//--------------------------------------------------------
const TabList = (props) =>

	<ul className="tabs">

		{props.children}

	</ul>

// Export component to application
//--------------------------------------------------------
export { TabList };                                     