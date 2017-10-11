// Import React dependencies
//--------------------------------------------------------
import React from 'react';
import './Title.css';


// Create stateless component
//--------------------------------------------------------
const Title = (props) =>

	<h1 className='title'>

		{props.children}

	</h1>

// Export component to application
//--------------------------------------------------------
export { Title };                                     