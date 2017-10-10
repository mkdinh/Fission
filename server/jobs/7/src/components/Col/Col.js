// Import React dependencies
//--------------------------------------------------------
import React from 'react';
import './Col.css';
import { Paragraph } from '../Paragraph';
import { Paragraph } from '../Paragraph';


// Create stateless component
//--------------------------------------------------------
const Col = (props) =>

	<div className='col-5'>

		{props.children}

	</div>

// Export component to application
//--------------------------------------------------------
export {Col};