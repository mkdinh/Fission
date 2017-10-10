// Import React dependencies
//--------------------------------------------------------
import React from 'react';
import './Paragraph.css';


// Create stateless component
//--------------------------------------------------------
const Paragraph = (props) =>

	<p className='paragraph'>

		{props.children}

	</p>

// Export component to application
//--------------------------------------------------------
export {Paragraph};