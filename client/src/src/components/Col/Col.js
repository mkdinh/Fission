// Import React dependencies
//--------------------------------------------------------
import React from 'react';
import './Col.css';
import { Paragraph } from '../Paragraph';


// Create stateless component
//--------------------------------------------------------
const Col = (props) =>

	<div className='col s8'>

		{props.children}

	</div>

// Export component to application
//--------------------------------------------------------
export { Col };                                     