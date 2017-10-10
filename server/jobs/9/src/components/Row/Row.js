// Import React dependencies
//--------------------------------------------------------
import React from 'react';
import './Row.css';
import { Col } from '../Col';


// Create stateless component
//--------------------------------------------------------
const Row = (props) =>

	<div className='row'>

		{props.children}

	</div>

// Export component to application
//--------------------------------------------------------
export { Row };
 };
