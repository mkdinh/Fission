// Import React dependencies
//--------------------------------------------------------
import React from 'react';
import './Title.css';


// Create stateless component
//--------------------------------------------------------
const Title = (props) =>

	<span className="card-title">

		{props.children}

	</span>

// Export component to application
//--------------------------------------------------------
export { Title };                                     