// Import React dependencies
//--------------------------------------------------------
import React from 'react';
import './Col.css';
import { Paragraph } from '../../Text';


// Create stateless component
//--------------------------------------------------------
const Col = (props) =>

	<div className={`col ${props.size}`}>

		{props.children}

	</div>

// Export component to application
//--------------------------------------------------------
export { Col };                                     