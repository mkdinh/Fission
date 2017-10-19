// Import React dependencies
//--------------------------------------------------------
import React from 'react';
import './Row.css';
import { Col } from '../Col';
import { About } from '../../Page';
import { Build } from '../../Page';
import { Team } from '../../Page';
import { Feedback } from '../../Page';


// Create stateless component
//--------------------------------------------------------
const Row = (props) =>

	<div className="row">
		{props.children}
	</div>

// Export component to application
//--------------------------------------------------------
export { Row };                                     